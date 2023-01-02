import { Request, Response } from "express";
import { IPropertyRequest } from "../interfaces/properties";
import { createPropertyService } from "../services/properties/createProperty.service";
import { listAllPropertiesService } from "../services/properties/listAllProperties.service";

const createPropertyController = async (req: Request, res: Response) => {
    const propertyData: IPropertyRequest = req.body
    const newProperty = await createPropertyService(propertyData)
    return res.status(201).json(newProperty)
}

const listAllPropertiesController = async (req: Request, res: Response) => {
    const properties = await listAllPropertiesService()
    return res.status(200).json(properties)
}

export { createPropertyController, listAllPropertiesController }