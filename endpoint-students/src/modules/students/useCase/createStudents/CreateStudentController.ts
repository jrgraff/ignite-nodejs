import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateStudentUseCase } from './CreateStudentUseCase';

class CreateStudentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      cpf,
      name,
      birthday,
    } = request.body;

    const createStudent = container.resolve(CreateStudentUseCase)

    const student = await createStudent.execute({
      cpf,
      name,
      birthday,
    })

    return response.status(201).json(student)
  }
}

export { CreateStudentController }