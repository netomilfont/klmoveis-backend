import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties";
import { propertySerializer } from "../../serializers/properties.serializers";

const createPropertyService = async (propertyData: any ): Promise<IPropertyRequest> => {
    console.log(propertyData)

    const propertyRepository = AppDataSource.getRepository(Property)

    // const findAdress = await propertyRepository.findOneBy({
    //     address: propertyData.address
    // })

    // if(findAdress) {
    //     throw new AppError("This adress already exists!", 409)
    // }

    const property = propertyRepository.create(propertyData)
    await propertyRepository.save(property)

    const propertyValidate = await propertySerializer.validate(property)

    return propertyValidate
}

export { createPropertyService }