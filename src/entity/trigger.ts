/* eslint-disable max-len */
import { isAsyncFunction } from 'util/types';
import { SourceAppDataSource } from '../datasource';

// eslint-disable-next-line import/prefer-default-export
export async function afterInsertUserTrigger() {
    try {
        await SourceAppDataSource.query(`
            DROP TRIGGER IF EXISTS after_insert_user;
        `);
        
        await SourceAppDataSource.query(`
            CREATE TRIGGER after_insert_user AFTER INSERT ON USER FOR EACH ROW 
            BEGIN
                INSERT INTO query_logger (data, operation, tableName)
                VALUES (JSON_OBJECT(
                    'userId', NEW.userId,
                    'firstname', NEW.firstname,
                    'lastname', NEW.lastname,
                    'email', NEW.email,
                    'role', NEW.role,
                    'collegeId', NEW.collegeId,
                    'studentId', NEW.studentId,
                    'username', NEW.username,
                    'isDelete', NEW.isDelete
                ), 'insert','user');
            END;
        `);

        console.log('Insert Trigger Successfully Created');
    } catch (e) {
        console.log(e);
    }
}


export async function afterUpdateUserTrigger() {
    try {
        await SourceAppDataSource.query(`
            DROP TRIGGER IF EXISTS after_update_user;
        `);
        
        await SourceAppDataSource.query(`
            CREATE TRIGGER after_update_user AFTER UPDATE ON USER FOR EACH ROW 
            BEGIN
                INSERT INTO query_logger (data, operation, tableName)
                VALUES (JSON_OBJECT(
                    'userId', NEW.userId,
                    'firstname', NEW.firstname,
                    'lastname', NEW.lastname,
                    'email', NEW.email,
                    'role', NEW.role,
                    'collegeId', NEW.collegeId,
                    'studentId', NEW.studentId,
                    'username', NEW.username,
                    'isDelete', NEW.isDelete
                ), 'update','user');
            END;
        `);

        console.log('Update Trigger Successfully Created');
    } catch (e) {
        console.log(e);
    }
}

export async function afterDeleteUserTrigger() {
    try {
        await SourceAppDataSource.query(`
            DROP TRIGGER IF EXISTS after_delete_user;
        `);
        
        await SourceAppDataSource.query(`
            CREATE TRIGGER after_delete_user AFTER DELETE ON USER FOR EACH ROW 
            BEGIN
                INSERT INTO query_logger (data, operation, tableName)
                VALUES (JSON_OBJECT(
                    'userId', OLD.userId,
                    'firstname', OLD.firstname,
                    'lastname', OLD.lastname,
                    'email', OLD.email,
                    'role', OLD.role,
                    'collegeId', OLD.collegeId,
                    'studentId', OLD.studentId,
                    'username', OLD.username,
                    'isDelete', OLD.isDelete
                ), 'delete','user');
            END;
        `);

        console.log('Delete Trigger Successfully Created');
    } catch (e) {
        console.log(e);
    }
}


