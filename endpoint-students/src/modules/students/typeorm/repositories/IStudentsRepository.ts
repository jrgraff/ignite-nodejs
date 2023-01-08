import { IStudentDTO } from "../../dtos";
import { Student } from "../entities/Student";

export interface IStudentsRepository {
  create: (data: IStudentDTO) => Promise<Student>
  list: () => Promise<Student[]>
  findByCPF: (cpf: string) => Promise<Student>
}