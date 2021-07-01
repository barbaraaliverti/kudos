import { Request, Response } from "express";
import { ListSentComplimentsService } from "../services/ListSentComplimentsService";

class ListSentComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listSentComplimentsService = new ListSentComplimentsService();

        const compliments = await listSentComplimentsService.execute(user_id)

        return response.json(compliments);
    }
}

export { ListSentComplimentsController };