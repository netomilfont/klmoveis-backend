import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entity"
import { AppError } from "../../errors/AppError"

const deleteUserService = async (userId: string): Promise<{}> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: userId
    })

    if(!user) {
        throw new AppError("User not found!", 404)
    }

    if(!user.isActive) {
        throw new AppError("User its already deactive!", 400)
    }

    user.isActive = false

    await userRepository.save(user)

    return {}
}

export { deleteUserService }