import express from 'express'
import { authController } from '../controllers/auth.controller.js'
import { validateBody } from '../middlewares/validate.middlewares.js'
import { authenticateSchema } from '../schemas/auth.schema.js'

const router = express.Router()

router  
    .post('/api/v1/auth', validateBody(authenticateSchema), authController)

export default router