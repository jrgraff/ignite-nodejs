import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryColumn()
  cpf: string;

  @Column()
  name: string;

  @Column()
  birthday: string;

  @CreateDateColumn()
  created_at: Date;
}