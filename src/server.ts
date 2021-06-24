import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

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