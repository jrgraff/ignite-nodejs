import { Router } from 'express'

import { ListStudentsController } from '../modules/students/useCase/listStudents/ListStudentsController'
import { CreateStudentController } from '../modules/students/useCase/createStudents/CreateStudentController'

const studentsRouter = Router()
const listStudents = new ListStudentsController()
const createStudent = new CreateStudentController()

studentsRouter.get('/', listStudents.handle)
studentsRouter.post('/', createStudent.handle)

export { studentsRouter }