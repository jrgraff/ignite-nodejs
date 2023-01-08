import { container } from 'tsyringe'

import { IStudentsRepository } from './IStudentsRepository';
import { StudentsRepository } from './StudentsRepository';

container.registerSingleton<IStudentsRepository>(
  "StudentsRepository",
  StudentsRepository
);