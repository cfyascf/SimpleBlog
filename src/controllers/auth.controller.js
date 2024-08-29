import { authenticateService } from "../services/auth.service.js"

export const authController = async (req, res) => {
    const service = await authenticateService(req.body)
    console.log(service)

    return res.status(200).json(service)
}