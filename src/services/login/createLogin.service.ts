import { IUserLogin } from "../../interfaces/users"
import jwt from "jsonwebtoken"
import { compare } from "bcryptjs"
import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entity"
import { AppError } from "../../errors/AppError"
import "dotenv/config"

const createLoginService = async ({email, password}: IUserLogin): Promise<string>  => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: email
    })
    
    if(!user) {
        throw new AppError("User or password invalid!", 403)
    }

    if(!user.isActive) {
        throw new AppError("This user is not longer active!")
    }
    
    const passwordMatch = await compare(password, user.password)
    
    
    if(!passwordMatch) {
        throw new AppError("User or password invalid!", 403)
    }
    
    const token = jwt.sign(
        {},
        process.env.SECRET_KEY as string,
        {
            subject: user.id,
            expiresIn: '24h'
        }
    )

    return token
}

export { createLoginService }