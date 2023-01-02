import { Router } from "express";
import { createPropertyController, listAllPropertiesController } from "../controllers/properties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureUserIsAdm from "../middlewares/ensureUserIsAdm.middleware";
import { propertySerializer } from "../serializers/properties.serializers";

const propertyRoutes = Router()

propertyRoutes.post('', ensureAuthMiddleware, ensureUserIsAdm ,createPropertyController)
propertyRoutes.get('', listAllPropertiesController)

export default propertyRoutes