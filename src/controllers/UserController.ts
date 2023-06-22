import { counterService, userCounterService } from './../services/user/userServices';
import { Request, Response } from "express";
import { createUserService, deleteUserService, listUserService, updateUserService } from "../services/user/userServices";
import { IUserCreate } from "../interfaces/user/IUserCreate";

// Compare this snippet from api/src/routes/userRoutes.ts:
export const userListController = (req: Request, res: Response) => {
    try{
        const users = listUserService();
        return res.json(users);
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
}

export const userDeleteController = (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const userDelete = deleteUserService(id);
        return res.json(userDelete);
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
}

export const userCreateController = async (req: Request, res: Response) => {
    try{
        const { name, password, job, isAdmin } : IUserCreate = req.body;
        const user = await createUserService({name, password, job, isAdmin});
        return res.json(user);
    }catch(error){
        console.log(error);
        res.json({message: error});
    }
}

export const userUpdateController = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const { name, password, job, isAdmin } : IUserCreate = req.body;
        await updateUserService(id, {name, password, job, isAdmin});
        return res.status(200).json({
            code: 200,
            message: `User ${id} updated successfully`
        });
  }catch(error){
        console.log(error);
        res.json({message: error});
  }
}

export const userCounterController = (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const counter = userCounterService(id);
        return res.json(counter);
    } catch (error) {
        console.log(error);
        res.json({message: error});
    }
}

export const counterController = (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const userCounter = counterService(id);
        return res.json(userCounter);
    }catch(error){
        console.log(error);
        res.json({message: error});
    }
}
