import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";

const listAllPropertiesService = async (): Promise<Property[]> => {

    const propertyRepository = AppDataSource.getRepository(Property)

    const property = await propertyRepository.find()

    return property
}

export { listAllPropertiesService }