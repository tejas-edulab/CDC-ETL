import { SourceAppDataSource } from "../datasource";
import QueryLogger from "../entity/queryLogger";

const queryLoggerRepository = SourceAppDataSource.getRepository(QueryLogger);

export default class QueryLoggerRepository{
    static getRecords = async () =>{
        const data = await queryLoggerRepository.find({where:{isRead:false}, 
             order: {
            id: 'ASC', // or 'DESC' for descending order
          },})

        return data;
    }

    static updateQueryLogger = async (id:number, data:object) => {
        console.log('11')
        const updated = await queryLoggerRepository.update({id}, data)
        console.log('22')
        return updated;
    }
}