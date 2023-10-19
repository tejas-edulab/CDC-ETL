import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({database: 'test_exam'})
export class UserDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({
    nullable: true
  })
  abcNumber: string;

}