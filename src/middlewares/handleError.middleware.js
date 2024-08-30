import { ZodError } from "zod"
import { AppError } from "../errors.js"

export const handleError = (err, req, res, next) => {
    if(err instanceof AppError) {
        res.status(err.status).json({ message: err.message })
    }

    if(err instanceof ZodError) {
        res.status(400).json({ message: err.flatten().fieldErrors })
    }

    console.log(err)
    return res.status(500).json({ message: 'Internal server error.' })
}