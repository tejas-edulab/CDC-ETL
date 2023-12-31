import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import QueryLogger from "./entity/queryLogger";
import ExamMaster from "./entity/examMaster";

dotenv.config();

// Datasource Initialization
const SourceAppDataSource = new DataSource({
  type: "mysql",
  host: process.env.SOURCE_MYSQL_ROOT_HOST || "localhost",
  port: Number(process.env.SOURCE_MYSQL_PORT) || 3306,
  username: process.env.SOURCE_MYSQL_USERNAME || "root",
  password: process.env.SOURCE_MYSQL_ROOT_PASSWORD || "root",
  database: process.env.SOURCE_MYSQL_DATABASE || "exam",
  entities: [QueryLogger],
  synchronize: true,
});

const DestinationAppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DESTINATION_MYSQL_ROOT_HOST || "localhost",
  port: Number(process.env.DESTINATION_MYSQL_PORT) || 3306,
  username: process.env.DESTINATION_MYSQL_USERNAME || "root",
  password: process.env.DESTINATION_MYSQL_ROOT_PASSWORD || "Password@123",
  database: process.env.DESTINATION_MYSQL_DATABASE || "test_exam",
  entities: [ExamMaster],
  synchronize: true,
});

export { SourceAppDataSource, DestinationAppDataSource };
