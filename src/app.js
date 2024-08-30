import 'express-async-errors';
import 'reflect-metadata';
import express from 'express'
import connectDb from './startup/db.js'
import cors from 'cors'
import router from './routes.js'
import { handleError } from './middlewares/handleError.middleware.js'

const app = express()

app.use(cors({
    origin: '*'
}))
app.use(express.json())

connectDb()
router(app)

app.use(handleError)

const port = 8080
const server = app.listen(port, () => console.log(`Listening on port ${port}`))

export default server