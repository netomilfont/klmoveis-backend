import { Router } from "express";
import { createCategoryController, listAllCategoriesController, listAllPropertiesOfCategoryController } from "../controllers/categories.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureUserIsAdm from "../middlewares/ensureUserIsAdm.middleware";

const categoryRoutes = Router()

categoryRoutes.post('', ensureAuthMiddleware, ensureUserIsAdm, createCategoryController)
categoryRoutes.get('', listAllCategoriesController)
categoryRoutes.get('/:id/properties', listAllPropertiesOfCategoryController)

export default categoryRoutes