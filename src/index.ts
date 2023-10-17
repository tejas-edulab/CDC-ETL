import "reflect-metadata";
import { SourceAppDataSource, DestinationAppDataSource } from "./datasource";

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

}

async function Transform(){

}

async function Load(){

}


async function ETL(){
  await Extract();
  await Transform();
  await Load();
}

async function main() {
  try {
    await connectToDataSources();
    await ETL();
  } catch (e) {
    console.error(e);
  }
}

main();
