import { IUser, IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers";

const updateUserService = async (userData: IUserUpdate, userId: string, userDataId: string): Promise<IUser> => {

    const userRepository =  AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: userId
    })

    const userLogged = await userRepository.findOneBy({
        id: userDataId
    })

    if(!user) {
        throw new AppError("User not found!", 404)
    }

    if(userId !== userDataId && userLogged.isAdm === false) {
        throw new AppError("You don't have permition", 401)
    }

    
    const updatedUser = userRepository.create({
        ...user,
        ...userData
    })

    await userRepository.save(updatedUser)

    const updatedUserWithoutPassword =  await userWithoutPasswordSerializer.validate(updatedUser, {
        stripUnknown: true
    })
    
    return updatedUserWithoutPassword
}

export { updateUserService }