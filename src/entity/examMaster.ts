import {
    Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { IResultType, IMonthType } from '../types';
  import { ICurrentSem, IGender, ISPHYSICALLYHANDICAPPED } from '../types';
  
  @Entity()
  export default class ExamMaster {
    @PrimaryGeneratedColumn()
      id: number;
  
    @Column({
      nullable: true,
    })
      examId:number;
  
    @Column({
      nullable: false,
    })
      semesterId:number;
  
    @Column({
      nullable: false,
    })
      courseId:number;
  
    @Column({
      nullable: true,
    })
      studentId:string;
  
    @Column({
      nullable: true,
    })
      prnNo: string;
  
    @Column({ nullable: true })
      seatNumber: string;
  
    @Column({
      nullable: false,
    })
      studentName: string;
  
    @Column({
      nullable: true,
    })
      examYear: number;
  
    @Column({
      type: 'enum',
      enum: IMonthType,
      nullable: true,
      default: null,
    })
      examMonth: IMonthType;
  
    @Column({
      nullable: false,
    })
      courseName:string;
  
    @Column({
      type: 'enum',
      enum: ICurrentSem,
      nullable: true,
    })
      semName:ICurrentSem;
  
    @Column({
      nullable: true,
    })
      academicYear: string;
  
    @Column({
      nullable: true,
    })
      collegeId: number;
  
    @Column({
      nullable: false,
    })
      collegeName: string;
  
    @Column({
      type: 'enum',
      enum: IResultType,
      nullable: false,
    })
      examType: IResultType;
  
    @Column({
      nullable: true,
    })
      subjectId1:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode1: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName1: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax1: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin1: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt1: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax1: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin1: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt1: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade1: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint1: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint1: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace1: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace1: number;
  
    // Subject 2
    @Column({
      nullable: true,
    })
      subjectId2:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode2: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName2: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax2: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin2: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt2: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax2: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin2: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt2: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade2: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint2: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint2: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace2: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace2: number;
  
    // subject 3
    @Column({
      nullable: true,
    })
      subjectId3:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode3: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName3: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax3: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin3: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt3: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax3: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin3: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt3: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade3: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint3: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint3: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace3: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace3: number;
  
    // subject 4
    @Column({
      nullable: true,
    })
      subjectId4:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode4: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName4: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax4: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin4: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt4: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax4: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin4: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt4: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade4: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint4: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint4: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace4: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace4: number;
  
    // subject 5
    @Column({
      nullable: true,
    })
      subjectId5:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode5: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName5: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax5: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin5: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt5: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax5: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin5: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt5: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade5: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint5: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint5: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace5: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace5: number;
  
    // subject 6
  
    @Column({
      nullable: true,
    })
      subjectId6:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode6: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName6: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax6: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin6: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt6: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax6: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin6: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt6: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade6: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint6: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint6: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace6: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace6: number;
  
    // subject 7
    @Column({
      nullable: true,
    })
      subjectId7:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode7: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName7: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax7: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin7: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt7: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax7: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin7: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt7: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade7: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint7: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint7: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace7: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace7: number;
  
    // subject 8
    @Column({
      nullable: true,
    })
      subjectId8:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode8: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName8: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax8: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin8: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt8: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax8: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin8: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt8: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade8: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint8: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint8: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace8: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace8: number;
  
    // subject 9
    @Column({
      nullable: true,
    })
      subjectId9:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode9: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName9: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax9: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin9: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt9: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax9: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin9: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt9: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade9: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint9: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint9: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace9: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace9: number;
  
    // subject 10
    @Column({
      nullable: true,
    })
      subjectId10:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode10: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName10: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax10: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin10: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt10: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax10: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin10: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt10: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade10: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint10: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint10: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace10: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace10: number;
  
    // subject 11
    @Column({
      nullable: true,
    })
      subjectId11:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode11: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName11: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax11: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin11: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt11: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax11: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin11: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt11: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade11: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint11: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint11: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace11: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace11: number;
  
    // Subject 12
    @Column({
      nullable: true,
    })
      subjectId12:number;
  
    @Column({
      nullable: false,
      default: '',
    })
      subCode12: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      subName12: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMax12: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intMin12: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      intObt12: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMax12: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extMin12: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      extObt12: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade12: string;
  
    @Column({
      nullable: false,
      default: 0,
    })
      gradPoint12: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      creditPoint12: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      grace12: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      totalGrace12: number;
  
    // total
    @Column({
      nullable: false,
      default: 0,
    })
      outOfTotalMarks: number;
  
    @Column({
      nullable: false,
      default: 0,
    })
      obtainedTotalMarks: number;
  
    @Column({
      nullable: false,
      default: '',
    })
      grade: string;
  
    @Column({
      nullable: false,
      default: '',
    })
      finalGrade: string;
  
    @Column({
      nullable: false,
    })
      result: string;
  
    @Column({
      nullable: false,
      default: 0,
      type: 'decimal',
      precision: 8,
      scale: 2,
    })
      cgpa: number;
  
    @Column({
      nullable: false,
      default: 0,
      type: 'decimal',
      precision: 8,
      scale: 2,
    })
      sgpa: number;
  
    @CreateDateColumn()
      createdAt: Date;
  
    @UpdateDateColumn()
      updatedAt: Date;
  
    @Column({
      type: 'enum',
      enum: IGender,
      nullable: false,
    })
      gender: IGender;
  
    @Column({
      nullable: true,
      enum: ISPHYSICALLYHANDICAPPED,
      type: 'enum',
    })
      isPhysicallyHandicapped: ISPHYSICALLYHANDICAPPED;
  
    @Column({
      nullable: true,
    })
      category: string;
  
    @Column({
      nullable: true,
    })
      categoryType: string;
  
    @Column({
      nullable: true,
    })
      nationality: string;
  
    @Column({
      nullable: true,
    })
      minority: string;
  
    @Column({
      nullable: true,
    })
      casteName: string;
  
    @Column({
      nullable: true,
    })
      motherTounge: string;
  
    @Column({
      nullable: true,
    })
      sessionName: string;
  
    @Column({
      nullable: true,
    })
      branch: string;
  
    @Column({
      nullable: true,
    })
      admissionDate: string;
  }
  