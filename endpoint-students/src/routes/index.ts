import { Router } from 'express'

const router = Router()

import { studentsRouter } from './students.routes'

router.use('/students', studentsRouter)

export { router }