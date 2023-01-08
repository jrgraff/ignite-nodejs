import { inject, injectable } from 'tsyringe'

import { Student } from '../../typeorm/entities/Student';
import { IStudentsRepository } from '../../typeorm/repositories/IStudentsRepository';

@injectable()
class ListStudentsUseCase {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository
  ) {}

  async execute(): Promise<Student[]> {
    const students = await this.studentsRepository.list();

    return students;
  }
}

export { ListStudentsUseCase }