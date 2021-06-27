import "reflect-metadata";
import express, { Request, Response, NextFunction} from "express";
import "express-async-errors"; //para capturar erros async
import { router } from "./routes";
import "./database";

const app = express();

//Middleware que habilita json para requisições
app.use(express.json());

//middleware que injeta rotas
app.use(router);

//middleware que trata exceções (erros)
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    //verifica se é um erro gerado por 'throw new error' em vez de erro de servidor (500)
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
})

//criar rota
app.get("/test", (request, response) => {
    //request: entrada
    //response: saída
    return response.send("olá, nlw");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá post ")
})
app.listen(3000, () => {console.log("Server is running uhul")});