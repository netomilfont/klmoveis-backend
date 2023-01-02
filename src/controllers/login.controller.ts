import  { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import { createLoginService } from "../services/login/createLogin.service";

const createLoginController = async (req: Request, res: Response) => {
    const loginData: IUserLogin = req.body
    const token = await createLoginService(loginData)
    return res.json({token})
}

export { createLoginController }