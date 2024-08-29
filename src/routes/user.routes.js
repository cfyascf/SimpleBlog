import express from 'express'
import { getAllUsersController, createUserController } from '../controllers/user.controller.js'
import { createUserSchema } from '../schemas/user.schema.js'
import { validateBody } from '../middlewares/validate.middlewares.js'

const router = express.Router()

router
    .get('/api/v1/user/:id?', getAllUsersController)
    .post('/api/v1/user', validateBody(createUserSchema), createUserController)

export default router