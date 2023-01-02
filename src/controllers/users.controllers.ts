import  { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import { createUserService } from "../services/users/createUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { updateUserService } from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService()
    return res.status(200).json(users)
}

const updateUserController = async (req: Request, res: Response) => {
    const userData: IUserUpdate = req.body
    const userDataId: string = req.user.id
    const userId: string = req.params.id
    const updatedUser = await updateUserService(userData, userId, userDataId)
    return res.status(200).json(updatedUser)
}

const deleteUserController = async (req: Request, res: Response) => {
    const userId: string = req.params.id
    const deleteUser = await deleteUserService(userId)
    return res.status(204).json(deleteUser)
}

export { createUserController, listUsersController, updateUserController, deleteUserController }
