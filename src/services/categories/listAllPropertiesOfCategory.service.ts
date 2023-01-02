import AppDataSource from "../../data-source"
import { Category } from "../../entities/categories.entity"
import { Property } from "../../entities/properties.entity"
import { AppError } from "../../errors/AppError"
import { IPropertyRequest } from "../../interfaces/properties"


const listAllPropertiesOfCategoryService = async (categoryId: string): Promise<Category> => {
        
    const categoryRepository = AppDataSource.getRepository(Category)

    const category = await categoryRepository.findOne({
        where: {
            id: categoryId
        },
        relations: {
            properties: true
        },
        withDeleted: true
    })

    if(!category) {
        throw new AppError("Invalid category id", 404)
    }

    return category
}

export { listAllPropertiesOfCategoryService }