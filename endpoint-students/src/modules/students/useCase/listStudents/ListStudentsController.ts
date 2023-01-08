import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListStudentsUseCase } from './ListStudentsUseCase';

class ListStudentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listStudentsUseCase = container.resolve(ListStudentsUseCase)

    const allStudents = await listStudentsUseCase.execute();

    return response.json(allStudents)
  }
}

export { ListStudentsController }