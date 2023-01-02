import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
 

const ensureVerifyBodyUpdate = async (req: Request, res: Response, next: NextFunction) => {
    
    const user = req.body
    
    for(let prop in user) {
        if(prop === "isActive" || prop === "isAdm" || prop === "id" ) {
            throw new AppError("You don't have permition to update your status adm, active or id.", 401)
        }
    }

    return next()
}

export default ensureVerifyBodyUpdate