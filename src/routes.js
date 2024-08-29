import bodyParser from 'body-parser'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'

const routes = (app) => {
    app.use(
        bodyParser.json(),
        userRoutes,
        authRoutes
    )
}

export default routes