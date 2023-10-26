import { SourceAppDataSource } from "../datasource";
import QueryLogger from "../entity/queryLogger";

const queryLoggerRepository = SourceAppDataSource.getRepository(QueryLogger);

export default class QueryLoggerRepository{
    static getRecords = async () =>{
        const data = await queryLoggerRepository.find({where:{isUpdated:false}, 
             order: {
            id: 'ASC', // or 'DESC' for descending order
          },})

        return data;
    }

    static updateQueryLogger = async (id:number, data:object) => {
        const updated = await queryLoggerRepository.update({id}, data)
        return updated;
    }
}