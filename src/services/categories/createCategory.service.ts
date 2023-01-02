import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async (categoryData: ICategoryRequest): Promise<Category> => {

    const categoryRepository = AppDataSource.getRepository(Category)
    
    const findCategory = await categoryRepository.findOneBy({
        name: categoryData.name
    })

    if(findCategory){
        throw new AppError("This category already exists!", 409)
    }

    const category = categoryRepository.create(categoryData)
    await categoryRepository.save(category)

    return category
}

export { createCategoryService }