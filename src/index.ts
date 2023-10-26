import { SourceAppDataSource, DestinationAppDataSource } from "./datasource";
import { createTriggers } from "./entity/trigger";
import cron from 'node-cron';
import QueryLoggerRepository from "./util/queryLogger";
import UserDetailRepository from "./util/userDetail";
import { tableToObjectMap } from "./mapping/user.map";
import { jsonParser } from "./util/common";
import QueryLogger from "./entity/queryLogger";
import ExamMaster from "./entity/examMaster";
import ExamMasterRepository from "./util/examMaster";

let isLoadCompleted = true;

async function connectToDataSources() {
  try {
    const sourceAppDataSource = await SourceAppDataSource.connect();
    const destinationAppDataSource = await DestinationAppDataSource.connect();
    return [sourceAppDataSource,destinationAppDataSource];
  } catch (e) {
    console.error("Error connecting to data sources:", e);
  }
}

async function Extract() {
  cron.schedule('*/5 * * * *', async () => {
    if(isLoadCompleted){
      let loggedRecords = await QueryLoggerRepository.getRecords();
      if (loggedRecords.length > 0) {
        await Transform(loggedRecords);
      }
    }

  })
}

// Define an asynchronous function for data transformation
async function Transform(loggedRecords: QueryLogger[]) {
  console.log('inside transform')
  // Initialize an array to store the transformed data
  const transformData: any[] = [];

  // Parse the input data using a function named `jsonParser`
  loggedRecords = jsonParser(loggedRecords);

  // Loop through each logged record for transformation
  for (let i = 0; i < loggedRecords.length; i++) {
    const row = loggedRecords[i];

    // Retrieve the mapping of source table columns to destination columns
    const sourceToDestinationTableMap = tableToObjectMap[row.tableName];

    // Extract the source column names
    const sourceColumns = Object.keys(sourceToDestinationTableMap);

    // Create an entity object to hold the transformed data
    const entity: { [key: string]: unknown } = {};

    // Iterate through source columns and map them to destination columns
    sourceColumns.forEach((column) => {
      const destinationColumnName = sourceToDestinationTableMap[column];
      entity[destinationColumnName] = row.data[column]; // Assign initial values as needed
    });

    // Add the common properties to the entity
    entity.id = row.id;
    entity.operation = row.operation;

    // Add the entity to the array of transformed data
    transformData.push(entity);

    // Update the QueryLogger record with 'isRead' set to true
    await QueryLoggerRepository.updateQueryLogger(row.id, { isRead: true });
  }

  // Load the transformed data into your destination
  await Load(transformData);
}

// You may want to add type information for `tableToObjectMap` and `QueryLoggerRepository` if they are external to this file.


async function Load(records: any) {
  isLoadCompleted = false;
  for (let i = 0; i < records.length; i++) {
    const row = records[i];
    if (row.operation === 'insert') {
      const { operation, ...rest } = row
      await ExamMasterRepository.addRecord(rest)
      await QueryLoggerRepository.updateQueryLogger(row.id, { isUpdated: true })
    } else if (row.operation === 'update') {
      const { operation, id, ...rest } = row
      const updated = await ExamMasterRepository.updateRecord(rest, rest.prnNo)
      if (updated) await QueryLoggerRepository.updateQueryLogger(id, { isUpdated: true })
    } else if (row.operation === 'delete') {
      const deleted = await ExamMasterRepository.deleteRecords(row.prnNo)
      if (deleted) await QueryLoggerRepository.updateQueryLogger(row.id, { isUpdated: true })
    }
  }

    // Update the global variable to indicate that the load operation is completed
    isLoadCompleted = true;
    console.log('after finish',isLoadCompleted)
}


async function ETL() {
  await Extract();
}

async function main() {
  try {
    await connectToDataSources();
    await createTriggers();
    await ETL();
  } catch (e) {
    console.error(e);
  }
}

main();
