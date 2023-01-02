import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressRequest, IPropertyRequest } from "../interfaces/properties";

const propertySerializer: SchemaOf<IPropertyRequest> = yup.object().shape({
    id: yup.string(),
    value: yup.number().notRequired(),
    size: yup.number().notRequired(),
    address: yup.object().shape({
        district: yup.string().notRequired(),
        zipCode: yup.string().notRequired(),
        number: yup.string().notRequired(),
        city: yup.string().notRequired(),
        state: yup.string().notRequired(),
        id: yup.string().notRequired()
    }),
    categoryId: yup.string().notRequired(),
    sold: yup.boolean().notRequired(),
    createdAt: yup.date(),
    updatedAt: yup.date()
})

export { propertySerializer }