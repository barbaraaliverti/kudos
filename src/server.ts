import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

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