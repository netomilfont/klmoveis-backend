import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUser } from "../../interfaces/users";
import { listAllUsersSerializer } from "../../serializers/user.serializers";

const listUsersService = async (): Promise<IUser[]> => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const updatedUserWithoutPassword =  await listAllUsersSerializer.validate(users, {
        stripUnknown: true
    })

    return updatedUserWithoutPassword
}

export { listUsersService }