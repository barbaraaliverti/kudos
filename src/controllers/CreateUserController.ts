import { Request, Response } from "express";
import { RepositoryNotTreeError } from "typeorm";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController {

    //grab params (name, email, admin) from request
    async handle(request: Request, response: Response) {
        const { name, email, admin } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, admin });

        return response.json(user);
    }
}

export { CreateUserController };