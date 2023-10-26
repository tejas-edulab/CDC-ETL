import { DestinationAppDataSource, SourceAppDataSource } from "../datasource";
import ExamMaster from "../entity/examMaster";

const examMasterRepository = DestinationAppDataSource.getRepository(ExamMaster);

export default class ExamMasterRepository{

    static addRecord = async(data:any) =>{
        const add = await examMasterRepository.save(data);
        return add;
    }

    static updateRecord = async(data:object,prnNo:string) =>{
        const updated = await examMasterRepository.update({prnNo},data)
        if(updated.affected === 0 ) return false;
        return true; 
    }

    static deleteRecords = async (prnNo:string) => {
        const deleted = await examMasterRepository.delete({prnNo})
        if(deleted.affected === 0) return false;
        return true;
    }
   
}