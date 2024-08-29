import { createUserService, getAllUsersService } from "../services/user.service.js"

export const createUserController = async (req, res) => {
    const service = await createUserService(req.body)

    return res.status(201).json(service)
}

export const getAllUsersController = async (req, res) => {
    const service = await getAllUsersService();

    return res.status(200).json(service)
}