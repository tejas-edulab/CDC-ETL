import { SourceAppDataSource, DestinationAppDataSource } from "./datasource";
import { afterDeleteUserTrigger, afterInsertUserTrigger, afterUpdateUserTrigger } from "./entity/trigger";
import cron from 'node-cron';
import QueryLoggerRepository from "./util/queryLogger";
import UserDetailRepository from "./util/userDetail";
import { userToUserDetail } from "./mapping/user.map";
import { jsonParser } from "./util/common";

async function connectToDataSources() {
  try {
    const sourceAppDataSource = await SourceAppDataSource.connect();
    const destinationAppDataSource = await DestinationAppDataSource.connect();
    return [sourceAppDataSource, destinationAppDataSource];
  } catch (e) {
    console.error("Error connecting to data sources:", e);
  }
}

async function Extract(){
  cron.schedule('*/5 * * * *',async()=>{
    let loggedRecords = await QueryLoggerRepository.getRecords();
    loggedRecords = jsonParser(loggedRecords)
    if(loggedRecords.length > 0) await Transform(loggedRecords);
  })
}

async function Transform(loggedRecords:any){
    const transformData = []
    
    for(let i=0;i<loggedRecords.length;i++){
      const row = loggedRecords[i];
      if (row.tableName === 'user'){
        const keys = Object.keys(userToUserDetail);
        const entity: { [key: string]: any } ={};
        keys.forEach((key) => {
          entity[key] = row.data[userToUserDetail[key]]; // You can assign initial values as needed
          entity.id = row.id,
          entity.operation = row.operation
        });
        transformData.push(entity)
      }
      await QueryLoggerRepository.updateQueryLogger(row.id,{isRead:true})
    }

    await Load(transformData);
}

async function Load(records: any){
  for(let i=0;i<records.length;i++){
    const row = records[i];
    if (row.operation === 'insert'){
      const {operation, ...rest} = row
     await UserDetailRepository.addRecord(rest)
     await QueryLoggerRepository.updateQueryLogger(row.id,{isUpdated:true})
    } else if (row.operation === 'update') {
      const {operation,id, ...rest} = row
      const updated = await UserDetailRepository.updateRecord(rest,rest.email )
      if(updated) await QueryLoggerRepository.updateQueryLogger(id,{isUpdated:true})
    } else if (row.operation === 'delete') {
      const deleted = await UserDetailRepository.deleteRecords(row.email)
      if(deleted) await QueryLoggerRepository.updateQueryLogger(row.id,{isUpdated:true})
    }
  }
}


async function ETL(){
  await Extract();
}

async function main() {
  try {
    await connectToDataSources();
    await afterInsertUserTrigger();
    await afterUpdateUserTrigger();
    await afterDeleteUserTrigger();
    await ETL(); 
  } catch (e) {
    console.error(e);
  }
}

main();
