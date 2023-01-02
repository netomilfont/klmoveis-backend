import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureUserIsAdm from "../middlewares/ensureUserIsAdm.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { userSerializer, userUpdateSerializer } from "../serializers/user.serializers";
import ensureVerifyBodyUpdate from "../middlewares/ensureVerifyBodyUptade.middleware";

const userRoutes = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSerializer), createUserController)
userRoutes.get('', ensureAuthMiddleware, ensureUserIsAdm, listUsersController)
userRoutes.patch('/:id', ensureAuthMiddleware, ensureVerifyBodyUpdate, ensureDataIsValidMiddleware(userUpdateSerializer), updateUserController)
userRoutes.delete('/:id', ensureAuthMiddleware, ensureUserIsAdm, deleteUserController)

export default userRoutes