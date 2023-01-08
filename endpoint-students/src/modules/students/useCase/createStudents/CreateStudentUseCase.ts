import { inject, injectable } from 'tsyringe'

import { CustomErrors } from '../../../../errors/CustomErrors';
import { testaCPF } from '../../../../errors/validateCPF';
import { IStudentDTO } from '../../dtos';
import { Student } from '../../typeorm/entities/Student';
import { IStudentsRepository } from '../../typeorm/repositories/IStudentsRepository';

@injectable()
class CreateStudentUseCase {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository
  ) {}

  async execute({ cpf, name, birthday }: IStudentDTO): Promise<Student> {
    if (!testaCPF(cpf)) {
      throw new CustomErrors("Invalid CPF!")
    }

    if (!name) {
      throw new CustomErrors("Field 'name' is required")
    }

    if (!birthday) {
      throw new CustomErrors("Field 'birthday' is required")
    }
    
    if (await this.studentsRepository.findByCPF(cpf)) {
      throw new CustomErrors("User with the same CPF is already registered!")
    }

    const student = await this.studentsRepository.create({ cpf, name, birthday });

    return student;
  }
}

export { CreateStudentUseCase }