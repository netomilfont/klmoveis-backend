import { IUser, IUserRequest } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entity"
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers"
import { AppError } from "../../errors/AppError"

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        email: userData.email
    })

    if(findUser){
        throw new AppError("This user already exists!", 409)
    }

    const user = userRepository.create(userData)
    await userRepository.save(user)

    const userReturn = await userWithoutPasswordSerializer.validate(user, {
        stripUnknown: true
    })

    return userReturn
}

export { createUserService }