import {
    Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class QueryLogger {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true,
        type: 'longtext',
    })
    data: string;

    @Column({
        nullable: true,
        type: 'longtext',
    })
    operation: string;

    @Column({
        default: false,
    })
    isRead: boolean;

    @Column({
        default: false,
    })
    isUpdated: boolean;

    
  @Column({
    nullable: true
  })
  tableName: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
