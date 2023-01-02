import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUser, IUserUpdate } from "../interfaces/users";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    isAdm: yup.boolean().required(),
    password: yup.string().required()
})

const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    isAdm: yup.boolean().notRequired(),
    isActive: yup.boolean().notRequired(),
    id: yup.string().notRequired(),
    createdAt: yup.date(),
    updatedAt: yup.date()
})

const listAllUsersSerializer = yup.array(userWithoutPasswordSerializer)

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired()
})

export { userSerializer, userWithoutPasswordSerializer, userUpdateSerializer, listAllUsersSerializer }