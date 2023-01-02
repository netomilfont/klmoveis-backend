import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import { AppError } from "../errors/AppError";
 

const ensureUserIsAdm = async (req: Request, res: Response, next: NextFunction) => {
    
    const userId =  req.user.id

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: userId
    })

    if(!user) {
        throw new AppError("User not found!", 404)
    }

    if(!user.isAdm){
        throw new AppError("You don't have permition", 403)
    }

    return next()
}

export default ensureUserIsAdm