/* eslint-disable max-len */
import { SourceAppDataSource } from '../datasource';

// eslint-disable-next-line import/prefer-default-export
export async function afterInsertRevisedMarksheetTrigger() {
    try {
        await SourceAppDataSource.query(`
            DROP TRIGGER IF EXISTS after_insert_revised_arksheet;
        `);
        
await SourceAppDataSource.query(`
    CREATE TRIGGER after_insert_revised_arksheet
    AFTER INSERT ON revised_marksheet
    FOR EACH ROW 
    BEGIN
        INSERT INTO query_logger (data, operation, tableName)
        VALUES (JSON_OBJECT(
            'id', NEW.id,
            'examId', NEW.examId,
            'semesterId', NEW.semesterId,
            'courseId', NEW.courseId,
            'studentId', NEW.studentId,
            'prnNo', NEW.prnNo,
            'seatNumber', NEW.seatNumber,
            'studentName', NEW.studentName,
            'examYear', NEW.examYear,
            'examMonth', NEW.examMonth,
            'courseName', NEW.courseName,
            'semName', NEW.semName,
            'academicYear', NEW.academicYear,
            'collegeId', NEW.collegeId,
            'collegeName', NEW.collegeName,
            'examType', NEW.examType,
            'subjectId1', NEW.subjectId1,
            'subCode1', NEW.subCode1,
            'subName1', NEW.subName1,
            'intMax1', NEW.intMax1,
            'intMin1', NEW.intMin1,
            'intObt1', NEW.intObt1,
            'extMax1', NEW.extMax1,
            'extMin1', NEW.extMin1,
            'extObt1', NEW.extObt1,
            'grade1', NEW.grade1,
            'gradPoint1', NEW.gradPoint1,
            'creditPoint1', NEW.creditPoint1,
            'grace1', NEW.grace1,
            'totalGrace1', NEW.totalGrace1,
            'subjectId2', NEW.subjectId2,
            'subCode2', NEW.subCode2,
            'subName2', NEW.subName2,
            'intMax2', NEW.intMax2,
            'intMin2', NEW.intMin2,
            'intObt2', NEW.intObt2,
            'extMax2', NEW.extMax2,
            'extMin2', NEW.extMin2,
            'extObt2', NEW.extObt2,
            'grade2', NEW.grade2,
            'gradPoint2', NEW.gradPoint2,
            'creditPoint2', NEW.creditPoint2,
            'grace2', NEW.grace2,
            'totalGrace2', NEW.totalGrace2,
            'subjectId3', NEW.subjectId3,
            'subCode3', NEW.subCode3,
            'subName3', NEW.subName3,
            'intMax3', NEW.intMax3,
            'intMin3', NEW.intMin3,
            'intObt3', NEW.intObt3,
            'extMax3', NEW.extMax3,
            'extMin3', NEW.extMin3,
            'extObt3', NEW.extObt3,
            'grade3', NEW.grade3,
            'gradPoint3', NEW.gradPoint3,
            'creditPoint3', NEW.creditPoint3,
            'grace3', NEW.grace3,
            'totalGrace3', NEW.totalGrace3,
            'subjectId4', NEW.subjectId4,
            'subCode4', NEW.subCode4,
            'subName4', NEW.subName4,
            'intMax4', NEW.intMax4,
            'intMin4', NEW.intMin4,
            'intObt4', NEW.intObt4,
            'extMax4', NEW.extMax4,
            'extMin4', NEW.extMin4,
            'extObt4', NEW.extObt4,
            'grade4', NEW.grade4,
            'gradPoint4', NEW.gradPoint4,
            'creditPoint4', NEW.creditPoint4,
            'grace4', NEW.grace4,
            'totalGrace4', NEW.totalGrace4,
            'subjectId5', NEW.subjectId5,
            'subCode5', NEW.subCode5,
            'subName5', NEW.subName5,
            'intMax5', NEW.intMax5,
            'intMin5', NEW.intMin5,
            'intObt5', NEW.intObt5,
            'extMax5', NEW.extMax5,
            'extMin5', NEW.extMin5,
            'extObt5', NEW.extObt5,
            'grade5', NEW.grade5,
            'gradPoint5', NEW.gradPoint5,
            'creditPoint5', NEW.creditPoint5,
            'grace5', NEW.grace5,
            'totalGrace5', NEW.totalGrace5,
            'subjectId6', NEW.subjectId6,
            'subCode6', NEW.subCode6,
            'subName6', NEW.subName6,
            'intMax6', NEW.intMax6,
            'intMin6', NEW.intMin6,
            'intObt6', NEW.intObt6,
            'extMax6', NEW.extMax6,
            'extMin6', NEW.extMin6,
            'extObt6', NEW.extObt6,
            'grade6', NEW.grade6,
            'gradPoint6', NEW.gradPoint6,
            'creditPoint6', NEW.creditPoint6,
            'grace6', NEW.grace6,
            'totalGrace6', NEW.totalGrace6,
            'subjectId7', NEW.subjectId7,
            'subCode7', NEW.subCode7,
            'subName7', NEW.subName7,
            'intMax7', NEW.intMax7,
            'intMin7', NEW.intMin7,
            'intObt7', NEW.intObt7,
            'extMax7', NEW.extMax7,
            'extMin7', NEW.extMin7,
            'extObt7', NEW.extObt7,
            'grade7', NEW.grade7,
            'gradPoint7', NEW.gradPoint7,
            'creditPoint7', NEW.creditPoint7,
            'grace7', NEW.grace7,
            'totalGrace7', NEW.totalGrace7,
            'subjectId8', NEW.subjectId8,
            'subCode8', NEW.subCode8,
            'subName8', NEW.subName8,
            'intMax8', NEW.intMax8,
            'intMin8', NEW.intMin8,
            'intObt8', NEW.intObt8,
            'extMax8', NEW.extMax8,
            'extMin8', NEW.extMin8,
            'extObt8', NEW.extObt8,
            'grade8', NEW.grade8,
            'gradPoint8', NEW.gradPoint8,
            'creditPoint8', NEW.creditPoint8,
            'grace8', NEW.grace8,
            'totalGrace8', NEW.totalGrace8,
            'subjectId9', NEW.subjectId9,
            'subCode9', NEW.subCode9,
            'subName9', NEW.subName9,
            'intMax9', NEW.intMax9,
            'intMin9', NEW.intMin9,
            'intObt9', NEW.intObt9,
            'extMax9', NEW.extMax9,
            'extMin9', NEW.extMin9,
            'extObt9', NEW.extObt9,
            'grade9', NEW.grade9,
            'gradPoint9', NEW.gradPoint9,
            'creditPoint9', NEW.creditPoint9,
            'grace9', NEW.grace9,
            'totalGrace9', NEW.totalGrace9,
            'subjectId10', NEW.subjectId10,
            'subCode10', NEW.subCode10,
            'subName10', NEW.subName10,
            'intMax10', NEW.intMax10,
            'intMin10', NEW.intMin10,
            'intObt10', NEW.intObt10,
            'extMax10', NEW.extMax10,
            'extMin10', NEW.extMin10,
            'extObt10', NEW.extObt10,
            'grade10', NEW.grade10,
            'gradPoint10', NEW.gradPoint10,
            'creditPoint10', NEW.creditPoint10,
            'grace10', NEW.grace10,
            'totalGrace10', NEW.totalGrace10,
            'subjectId11', NEW.subjectId11,
            'subCode11', NEW.subCode11,
            'subName11', NEW.subName11,
            'intMax11', NEW.intMax11,
            'intMin11', NEW.intMin11,
            'intObt11', NEW.intObt11,
            'extMax11', NEW.extMax11,
            'extMin11', NEW.extMin11,
            'extObt11', NEW.extObt11,
            'grade11', NEW.grade11,
            'gradPoint11', NEW.gradPoint11,
            'creditPoint11', NEW.creditPoint11,
            'grace11', NEW.grace11,
            'totalGrace11', NEW.totalGrace11,
            'subjectId12', NEW.subjectId12,
            'subCode12', NEW.subCode12,
            'subName12', NEW.subName12,
            'intMax12', NEW.intMax12,
            'intMin12', NEW.intMin12,
            'intObt12', NEW.intObt12,
            'extMax12', NEW.extMax12,
            'extMin12', NEW.extMin12,
            'extObt12', NEW.extObt12,
            'grade12', NEW.grade12,
            'gradPoint12', NEW.gradPoint12,
            'creditPoint12', NEW.creditPoint12,
            'grace12', NEW.grace12,
            'totalGrace12', NEW.totalGrace12,
            'outOfTotalMarks', NEW.outOfTotalMarks,
            'obtainedTotalMarks', NEW.obtainedTotalMarks,
            'grade', NEW.grade,
            'finalGrade', NEW.finalGrade,
            'result', NEW.result,
            'cgpa', NEW.cgpa,
            'sgpa', NEW.sgpa,
            'gender', NEW.gender,
            'isPhysicallyHandicapped', NEW.isPhysicallyHandicapped,
            'category', NEW.category,
            'categoryType', NEW.categoryType,
            'nationality', NEW.nationality,
            'minority', NEW.minority,
            'casteName', NEW.casteName,
            'sessionName', NEW.sessionName,
            'branch', NEW.branch,
            'admissionDate', NEW.admissionDate
        ), 'insert', 'revised_marksheet');
    END;
`);


        console.log('Insert Trigger Successfully Created');
    } catch (e) {
        console.log(e);
    }
}


export async function afterUpdateRevisedMarksheetTrigger() {
    try {
        await SourceAppDataSource.query(`
            DROP TRIGGER IF EXISTS after_update_revised_marksheet;
        `);
        
        await SourceAppDataSource.query(`
            CREATE TRIGGER after_update_revised_marksheet AFTER UPDATE ON revised_marksheet FOR EACH ROW 
            BEGIN
                INSERT INTO query_logger (data, operation, tableName)
                VALUES (JSON_OBJECT(
                    'id', NEW.id,
                    'examId', NEW.examId,
                    'semesterId', NEW.semesterId,
                    'courseId', NEW.courseId,
                    'studentId', NEW.studentId,
                    'prnNo', NEW.prnNo,
                    'seatNumber', NEW.seatNumber,
                    'studentName', NEW.studentName,
                    'examYear', NEW.examYear,
                    'examMonth', NEW.examMonth,
                    'courseName', NEW.courseName,
                    'semName', NEW.semName,
                    'academicYear', NEW.academicYear,
                    'collegeId', NEW.collegeId,
                    'collegeName', NEW.collegeName,
                    'examType', NEW.examType,
                    'subjectId1', NEW.subjectId1,
                    'subCode1', NEW.subCode1,
                    'subName1', NEW.subName1,
                    'intMax1', NEW.intMax1,
                    'intMin1', NEW.intMin1,
                    'intObt1', NEW.intObt1,
                    'extMax1', NEW.extMax1,
                    'extMin1', NEW.extMin1,
                    'extObt1', NEW.extObt1,
                    'grade1', NEW.grade1,
                    'gradPoint1', NEW.gradPoint1,
                    'creditPoint1', NEW.creditPoint1,
                    'grace1', NEW.grace1,
                    'totalGrace1', NEW.totalGrace1,
                    'subjectId2', NEW.subjectId2,
                    'subCode2', NEW.subCode2,
                    'subName2', NEW.subName2,
                    'intMax2', NEW.intMax2,
                    'intMin2', NEW.intMin2,
                    'intObt2', NEW.intObt2,
                    'extMax2', NEW.extMax2,
                    'extMin2', NEW.extMin2,
                    'extObt2', NEW.extObt2,
                    'grade2', NEW.grade2,
                    'gradPoint2', NEW.gradPoint2,
                    'creditPoint2', NEW.creditPoint2,
                    'grace2', NEW.grace2,
                    'totalGrace2', NEW.totalGrace2,
                    'subjectId3', NEW.subjectId3,
                    'subCode3', NEW.subCode3,
                    'subName3', NEW.subName3,
                    'intMax3', NEW.intMax3,
                    'intMin3', NEW.intMin3,
                    'intObt3', NEW.intObt3,
                    'extMax3', NEW.extMax3,
                    'extMin3', NEW.extMin3,
                    'extObt3', NEW.extObt3,
                    'grade3', NEW.grade3,
                    'gradPoint3', NEW.gradPoint3,
                    'creditPoint3', NEW.creditPoint3,
                    'grace3', NEW.grace3,
                    'totalGrace3', NEW.totalGrace3,
                    'subjectId4', NEW.subjectId4,
                    'subCode4', NEW.subCode4,
                    'subName4', NEW.subName4,
                    'intMax4', NEW.intMax4,
                    'intMin4', NEW.intMin4,
                    'intObt4', NEW.intObt4,
                    'extMax4', NEW.extMax4,
                    'extMin4', NEW.extMin4,
                    'extObt4', NEW.extObt4,
                    'grade4', NEW.grade4,
                    'gradPoint4', NEW.gradPoint4,
                    'creditPoint4', NEW.creditPoint4,
                    'grace4', NEW.grace4,
                    'totalGrace4', NEW.totalGrace4,
                    'subjectId5', NEW.subjectId5,
                    'subCode5', NEW.subCode5,
                    'subName5', NEW.subName5,
                    'intMax5', NEW.intMax5,
                    'intMin5', NEW.intMin5,
                    'intObt5', NEW.intObt5,
                    'extMax5', NEW.extMax5,
                    'extMin5', NEW.extMin5,
                    'extObt5', NEW.extObt5,
                    'grade5', NEW.grade5,
                    'gradPoint5', NEW.gradPoint5,
                    'creditPoint5', NEW.creditPoint5,
                    'grace5', NEW.grace5,
                    'totalGrace5', NEW.totalGrace5,
                    'subjectId6', NEW.subjectId6,
                    'subCode6', NEW.subCode6,
                    'subName6', NEW.subName6,
                    'intMax6', NEW.intMax6,
                    'intMin6', NEW.intMin6,
                    'intObt6', NEW.intObt6,
                    'extMax6', NEW.extMax6,
                    'extMin6', NEW.extMin6,
                    'extObt6', NEW.extObt6,
                    'grade6', NEW.grade6,
                    'gradPoint6', NEW.gradPoint6,
                    'creditPoint6', NEW.creditPoint6,
                    'grace6', NEW.grace6,
                    'totalGrace6', NEW.totalGrace6,
                    'subjectId7', NEW.subjectId7,
                    'subCode7', NEW.subCode7,
                    'subName7', NEW.subName7,
                    'intMax7', NEW.intMax7,
                    'intMin7', NEW.intMin7,
                    'intObt7', NEW.intObt7,
                    'extMax7', NEW.extMax7,
                    'extMin7', NEW.extMin7,
                    'extObt7', NEW.extObt7,
                    'grade7', NEW.grade7,
                    'gradPoint7', NEW.gradPoint7,
                    'creditPoint7', NEW.creditPoint7,
                    'grace7', NEW.grace7,
                    'totalGrace7', NEW.totalGrace7,
                    'subjectId8', NEW.subjectId8,
                    'subCode8', NEW.subCode8,
                    'subName8', NEW.subName8,
                    'intMax8', NEW.intMax8,
                    'intMin8', NEW.intMin8,
                    'intObt8', NEW.intObt8,
                    'extMax8', NEW.extMax8,
                    'extMin8', NEW.extMin8,
                    'extObt8', NEW.extObt8,
                    'grade8', NEW.grade8,
                    'gradPoint8', NEW.gradPoint8,
                    'creditPoint8', NEW.creditPoint8,
                    'grace8', NEW.grace8,
                    'totalGrace8', NEW.totalGrace8,
                    'subjectId9', NEW.subjectId9,
                    'subCode9', NEW.subCode9,
                    'subName9', NEW.subName9,
                    'intMax9', NEW.intMax9,
                    'intMin9', NEW.intMin9,
                    'intObt9', NEW.intObt9,
                    'extMax9', NEW.extMax9,
                    'extMin9', NEW.extMin9,
                    'extObt9', NEW.extObt9,
                    'grade9', NEW.grade9,
                    'gradPoint9', NEW.gradPoint9,
                    'creditPoint9', NEW.creditPoint9,
                    'grace9', NEW.grace9,
                    'totalGrace9', NEW.totalGrace9,
                    'subjectId10', NEW.subjectId10,
                    'subCode10', NEW.subCode10,
                    'subName10', NEW.subName10,
                    'intMax10', NEW.intMax10,
                    'intMin10', NEW.intMin10,
                    'intObt10', NEW.intObt10,
                    'extMax10', NEW.extMax10,
                    'extMin10', NEW.extMin10,
                    'extObt10', NEW.extObt10,
                    'grade10', NEW.grade10,
                    'gradPoint10', NEW.gradPoint10,
                    'creditPoint10', NEW.creditPoint10,
                    'grace10', NEW.grace10,
                    'totalGrace10', NEW.totalGrace10,
                    'subjectId11', NEW.subjectId11,
                    'subCode11', NEW.subCode11,
                    'subName11', NEW.subName11,
                    'intMax11', NEW.intMax11,
                    'intMin11', NEW.intMin11,
                    'intObt11', NEW.intObt11,
                    'extMax11', NEW.extMax11,
                    'extMin11', NEW.extMin11,
                    'extObt11', NEW.extObt11,
                    'grade11', NEW.grade11,
                    'gradPoint11', NEW.gradPoint11,
                    'creditPoint11', NEW.creditPoint11,
                    'grace11', NEW.grace11,
                    'totalGrace11', NEW.totalGrace11,
                    'subjectId12', NEW.subjectId12,
                    'subCode12', NEW.subCode12,
                    'subName12', NEW.subName12,
                    'intMax12', NEW.intMax12,
                    'intMin12', NEW.intMin12,
                    'intObt12', NEW.intObt12,
                    'extMax12', NEW.extMax12,
                    'extMin12', NEW.extMin12,
                    'extObt12', NEW.extObt12,
                    'grade12', NEW.grade12,
                    'gradPoint12', NEW.gradPoint12,
                    'creditPoint12', NEW.creditPoint12,
                    'grace12', NEW.grace12,
                    'totalGrace12', NEW.totalGrace12,
                    'outOfTotalMarks', NEW.outOfTotalMarks,
                    'obtainedTotalMarks', NEW.obtainedTotalMarks,
                    'grade', NEW.grade,
                    'finalGrade', NEW.finalGrade,
                    'result', NEW.result,
                    'cgpa', NEW.cgpa,
                    'sgpa', NEW.sgpa,
                    'gender', NEW.gender,
                    'isPhysicallyHandicapped', NEW.isPhysicallyHandicapped,
                    'category', NEW.category,
                    'categoryType', NEW.categoryType,
                    'nationality', NEW.nationality,
                    'minority', NEW.minority,
                    'casteName', NEW.casteName,
                    'sessionName', NEW.sessionName,
                    'branch', NEW.branch,
                    'admissionDate', NEW.admissionDate
                ), 'update','revised_marksheet');
            END;
        `);

        console.log('Update Trigger Successfully Created');
    } catch (e) {
        console.log(e);
    }
}

export async function afterDeleteRevisedMarksheetTrigger() {
    try {
        await SourceAppDataSource.query(`
            DROP TRIGGER IF EXISTS after_delete_revised_marksheet;
        `);
        
        await SourceAppDataSource.query(`
            CREATE TRIGGER after_delete_revised_marksheet AFTER DELETE ON revised_marksheet FOR EACH ROW 
            BEGIN
                INSERT INTO query_logger (data, operation, tableName)
                VALUES (JSON_OBJECT(
                    'id', OLD.id,
                    'examId', OLD.examId,
                    'semesterId', OLD.semesterId,
                    'courseId', OLD.courseId,
                    'studentId', OLD.studentId,
                    'prnNo', OLD.prnNo,
                    'seatNumber', OLD.seatNumber,
                    'studentName', OLD.studentName,
                    'examYear', OLD.examYear,
                    'examMonth', OLD.examMonth,
                    'courseName', OLD.courseName,
                    'semName', OLD.semName,
                    'academicYear', OLD.academicYear,
                    'collegeId', OLD.collegeId,
                    'collegeName', OLD.collegeName,
                    'examType', OLD.examType,
                    'subjectId1', OLD.subjectId1,
                    'subCode1', OLD.subCode1,
                    'subName1', OLD.subName1,
                    'intMax1', OLD.intMax1,
                    'intMin1', OLD.intMin1,
                    'intObt1', OLD.intObt1,
                    'extMax1', OLD.extMax1,
                    'extMin1', OLD.extMin1,
                    'extObt1', OLD.extObt1,
                    'grade1', OLD.grade1,
                    'gradPoint1', OLD.gradPoint1,
                    'creditPoint1', OLD.creditPoint1,
                    'grace1', OLD.grace1,
                    'totalGrace1', OLD.totalGrace1,
                    'subjectId2', OLD.subjectId2,
                    'subCode2', OLD.subCode2,
                    'subName2', OLD.subName2,
                    'intMax2', OLD.intMax2,
                    'intMin2', OLD.intMin2,
                    'intObt2', OLD.intObt2,
                    'extMax2', OLD.extMax2,
                    'extMin2', OLD.extMin2,
                    'extObt2', OLD.extObt2,
                    'grade2', OLD.grade2,
                    'gradPoint2', OLD.gradPoint2,
                    'creditPoint2', OLD.creditPoint2,
                    'grace2', OLD.grace2,
                    'totalGrace2', OLD.totalGrace2,
                    'subjectId3', OLD.subjectId3,
                    'subCode3', OLD.subCode3,
                    'subName3', OLD.subName3,
                    'intMax3', OLD.intMax3,
                    'intMin3', OLD.intMin3,
                    'intObt3', OLD.intObt3,
                    'extMax3', OLD.extMax3,
                    'extMin3', OLD.extMin3,
                    'extObt3', OLD.extObt3,
                    'grade3', OLD.grade3,
                    'gradPoint3', OLD.gradPoint3,
                    'creditPoint3', OLD.creditPoint3,
                    'grace3', OLD.grace3,
                    'totalGrace3', OLD.totalGrace3,
                    'subjectId4', OLD.subjectId4,
                    'subCode4', OLD.subCode4,
                    'subName4', OLD.subName4,
                    'intMax4', OLD.intMax4,
                    'intMin4', OLD.intMin4,
                    'intObt4', OLD.intObt4,
                    'extMax4', OLD.extMax4,
                    'extMin4', OLD.extMin4,
                    'extObt4', OLD.extObt4,
                    'grade4', OLD.grade4,
                    'gradPoint4', OLD.gradPoint4,
                    'creditPoint4', OLD.creditPoint4,
                    'grace4', OLD.grace4,
                    'totalGrace4', OLD.totalGrace4,
                    'subjectId5', OLD.subjectId5,
                    'subCode5', OLD.subCode5,
                    'subName5', OLD.subName5,
                    'intMax5', OLD.intMax5,
                    'intMin5', OLD.intMin5,
                    'intObt5', OLD.intObt5,
                    'extMax5', OLD.extMax5,
                    'extMin5', OLD.extMin5,
                    'extObt5', OLD.extObt5,
                    'grade5', OLD.grade5,
                    'gradPoint5', OLD.gradPoint5,
                    'creditPoint5', OLD.creditPoint5,
                    'grace5', OLD.grace5,
                    'totalGrace5', OLD.totalGrace5,
                    'subjectId6', OLD.subjectId6,
                    'subCode6', OLD.subCode6,
                    'subName6', OLD.subName6,
                    'intMax6', OLD.intMax6,
                    'intMin6', OLD.intMin6,
                    'intObt6', OLD.intObt6,
                    'extMax6', OLD.extMax6,
                    'extMin6', OLD.extMin6,
                    'extObt6', OLD.extObt6,
                    'grade6', OLD.grade6,
                    'gradPoint6', OLD.gradPoint6,
                    'creditPoint6', OLD.creditPoint6,
                    'grace6', OLD.grace6,
                    'totalGrace6', OLD.totalGrace6,
                    'subjectId7', OLD.subjectId7,
                    'subCode7', OLD.subCode7,
                    'subName7', OLD.subName7,
                    'intMax7', OLD.intMax7,
                    'intMin7', OLD.intMin7,
                    'intObt7', OLD.intObt7,
                    'extMax7', OLD.extMax7,
                    'extMin7', OLD.extMin7,
                    'extObt7', OLD.extObt7,
                    'grade7', OLD.grade7,
                    'gradPoint7', OLD.gradPoint7,
                    'creditPoint7', OLD.creditPoint7,
                    'grace7', OLD.grace7,
                    'totalGrace7', OLD.totalGrace7,
                    'subjectId8', OLD.subjectId8,
                    'subCode8', OLD.subCode8,
                    'subName8', OLD.subName8,
                    'intMax8', OLD.intMax8,
                    'intMin8', OLD.intMin8,
                    'intObt8', OLD.intObt8,
                    'extMax8', OLD.extMax8,
                    'extMin8', OLD.extMin8,
                    'extObt8', OLD.extObt8,
                    'grade8', OLD.grade8,
                    'gradPoint8', OLD.gradPoint8,
                    'creditPoint8', OLD.creditPoint8,
                    'grace8', OLD.grace8,
                    'totalGrace8', OLD.totalGrace8,
                    'subjectId9', OLD.subjectId9,
                    'subCode9', OLD.subCode9,
                    'subName9', OLD.subName9,
                    'intMax9', OLD.intMax9,
                    'intMin9', OLD.intMin9,
                    'intObt9', OLD.intObt9,
                    'extMax9', OLD.extMax9,
                    'extMin9', OLD.extMin9,
                    'extObt9', OLD.extObt9,
                    'grade9', OLD.grade9,
                    'gradPoint9', OLD.gradPoint9,
                    'creditPoint9', OLD.creditPoint9,
                    'grace9', OLD.grace9,
                    'totalGrace9', OLD.totalGrace9,
                    'subjectId10', OLD.subjectId10,
                    'subCode10', OLD.subCode10,
                    'subName10', OLD.subName10,
                    'intMax10', OLD.intMax10,
                    'intMin10', OLD.intMin10,
                    'intObt10', OLD.intObt10,
                    'extMax10', OLD.extMax10,
                    'extMin10', OLD.extMin10,
                    'extObt10', OLD.extObt10,
                    'grade10', OLD.grade10,
                    'gradPoint10', OLD.gradPoint10,
                    'creditPoint10', OLD.creditPoint10,
                    'grace10', OLD.grace10,
                    'totalGrace10', OLD.totalGrace10,
                    'subjectId11', OLD.subjectId11,
                    'subCode11', OLD.subCode11,
                    'subName11', OLD.subName11,
                    'intMax11', OLD.intMax11,
                    'intMin11', OLD.intMin11,
                    'intObt11', OLD.intObt11,
                    'extMax11', OLD.extMax11,
                    'extMin11', OLD.extMin11,
                    'extObt11', OLD.extObt11,
                    'grade11', OLD.grade11,
                    'gradPoint11', OLD.gradPoint11,
                    'creditPoint11', OLD.creditPoint11,
                    'grace11', OLD.grace11,
                    'totalGrace11', OLD.totalGrace11,
                    'subjectId12', OLD.subjectId12,
                    'subCode12', OLD.subCode12,
                    'subName12', OLD.subName12,
                    'intMax12', OLD.intMax12,
                    'intMin12', OLD.intMin12,
                    'intObt12', OLD.intObt12,
                    'extMax12', OLD.extMax12,
                    'extMin12', OLD.extMin12,
                    'extObt12', OLD.extObt12,
                    'grade12', OLD.grade12,
                    'gradPoint12', OLD.gradPoint12,
                    'creditPoint12', OLD.creditPoint12,
                    'grace12', OLD.grace12,
                    'totalGrace12', OLD.totalGrace12,
                    'outOfTotalMarks', OLD.outOfTotalMarks,
                    'obtainedTotalMarks', OLD.obtainedTotalMarks,
                    'grade', OLD.grade,
                    'finalGrade', OLD.finalGrade,
                    'result', OLD.result,
                    'cgpa', OLD.cgpa,
                    'sgpa', OLD.sgpa,
                    'gender', OLD.gender,
                    'isPhysicallyHandicapped', OLD.isPhysicallyHandicapped,
                    'category', OLD.category,
                    'categoryType', OLD.categoryType,
                    'nationality', OLD.nationality,
                    'minority', OLD.minority,
                    'casteName', OLD.casteName,
                    'sessionName', OLD.sessionName,
                    'branch', OLD.branch,
                    'admissionDate', OLD.admissionDate
                ), 'delete','revised_marksheet');
            END;
        `);

        console.log('Delete Trigger Successfully Created');
    } catch (e) {
        console.log(e);
    }
}

export async function createTriggers ()
{
    afterInsertRevisedMarksheetTrigger();
    afterUpdateRevisedMarksheetTrigger();
    afterDeleteRevisedMarksheetTrigger();
}

