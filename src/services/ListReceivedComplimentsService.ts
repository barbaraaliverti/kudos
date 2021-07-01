import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";

class ListReceivedComplimentsService {
    async execute(user_id: string) {
        const complimentRepositories = getCustomRepository(ComplimentRepositories);

        const compliments = await complimentRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["user_sender", "user_receiver", "tag"]
        });

        return compliments;
    }
};

export { ListReceivedComplimentsService };