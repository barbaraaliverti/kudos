import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password}: IAuthenticateRequest) {
        
        const userRepositories = getCustomRepository(UserRepositories);

        //verificar se o email existe
        const user = await userRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/Password incorrect");
        }

        //verificar se a senha está correta
        const passwordMatch = compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        //gera o token
        const token = sign({
            email: user.email
        },"067983a5cdca336eb18e7f53044de525", { //chave gerada em um MD5 hash generator 
            subject: user.id,
            expiresIn: "1d"
        });

        return token;

    }
}

export {AuthenticateUserService}