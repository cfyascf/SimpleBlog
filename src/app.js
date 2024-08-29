import express from 'express'
import connectDb from './startup/db.js'
import cors from 'cors'
import router from './routes.js'

const app = express()

app.use(cors({
    origin: '*'
}))

connectDb()

router(app)

const port = 8080
const server = app.listen(port, () => console.log(`Listening on port ${port}`))

export default server