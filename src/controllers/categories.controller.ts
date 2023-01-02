import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import { createCategoryService } from "../services/categories/createCategory.service";
import { listAllCategoriesService } from "../services/categories/listAllCategories.service";
import { listAllPropertiesOfCategoryService } from "../services/categories/listAllPropertiesOfCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
    const categoryData: ICategoryRequest = req.body
    const newCategory = await createCategoryService(categoryData)
    return res.status(201).json(newCategory)
}

const listAllCategoriesController = async (req: Request, res: Response) => {
    const categories = await listAllCategoriesService()
    return res.status(200).json(categories)
}

const listAllPropertiesOfCategoryController = async (req: Request, res: Response) => {
    const categoryId: string = req.params.id
    const properties = await listAllPropertiesOfCategoryService(categoryId)
    return res.status(200).json(properties)
}

export { createCategoryController, listAllCategoriesController, listAllPropertiesOfCategoryController }