import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

    //grab params (name, email, admin) from request
    async handle(request: Request, response: Response) {

        //Forma 1 de tratar exceções: 
        // try {
        //     const { name, email, admin } = request.body;

        //     const createUserService = new CreateUserService();

        //     const user = await createUserService.execute({ name, email, admin });
        // } catch (err) {
        //     return response.status(400).json({error:err.message})
        // // }

        const { name, email, admin, password } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, admin, password });

        return response.json(user);
    }
}

export { CreateUserController };