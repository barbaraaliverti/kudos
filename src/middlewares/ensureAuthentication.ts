import {Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthentication(request:Request, response:Response, next:NextFunction) {
    //receber o token
    const authToken = request.headers.authorization;

    //verificar se token está preenchido
    if(!authToken) {
        return response.status(401).end();
    }
    //verificar se token é valido
    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "067983a5cdca336eb18e7f53044de525") as IPayload; //corresponde ao user_id na requisição

        request.user_id = sub;

        return next();

    } catch (err) {
        return response.status(401).end();
    }   

    //recuperar informações do usuário
    
}