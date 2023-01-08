import { getRepository, Repository } from 'typeorm'

import { IStudentDTO } from '../../dtos'
import { Student } from '../entities/Student';
import { IStudentsRepository } from './IStudentsRepository';

export class StudentsRepository implements IStudentsRepository {
  private repository: Repository<Student>;

  constructor() {
    this.repository = getRepository(Student);
  }

  async create(data: IStudentDTO): Promise<Student> {
    const student = this.repository.create(data)

    return this.repository.save(student);
  }

  async list(): Promise<Student[]> {
    const students = await this.repository.find();

    return students;
  }

  async findByCPF(cpf: string): Promise<Student> {
    const student = await this.repository.findOne(cpf)

    return student
  }
}