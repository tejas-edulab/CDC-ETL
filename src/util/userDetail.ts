import { DestinationAppDataSource, SourceAppDataSource } from "../datasource";
import { UserDetail } from "../entity/userDetail";

const userDetailRepository = DestinationAppDataSource.getRepository(UserDetail);

export default class UserDetailRepository{

    static addRecord = async(data:any) =>{
        const add = await userDetailRepository.save({name:data.name,email:data.email});
        return add;
    }

    static updateRecord = async(data:object,email:string) =>{
        const updated = await userDetailRepository.update({email:email},data)
        if(updated.affected === 0 ) return false;
        return true; 
    }

    static deleteRecords = async (email:string) => {
        const deleted = await userDetailRepository.delete({email})
        if(deleted.affected === 0) return false;
        return true;
    }
   
}