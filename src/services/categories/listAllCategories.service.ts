import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";

const listAllCategoriesService = async (): Promise<Category[]> => {

    const categoryRepository = AppDataSource.getRepository(Category)

    const categories = await categoryRepository.find()

    return categories
}

export { listAllCategoriesService }