import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({ name, email, admin } : IUserRequest) {
        const usersRepository = getCustomRepository(UserRepositories);

        //check if user filled email field
        if (!email) {
            throw new Error("Invalid email");
        }

        //check if user already exists
        const userAlreadyExists = await usersRepository.findOne({
            email,
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        //create instance
        const user = usersRepository.create({
            name,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService }