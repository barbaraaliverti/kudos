import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message } : IComplimentRequest) {
        const complimentRepositories = getCustomRepository(ComplimentRepositories);
        const userRepositories = getCustomRepository(UserRepositories); //precisa importar para fazer validação dos usuários

        if(user_sender === user_receiver) {
            throw new Error("Incorrect receiver")
        }

        //verifica se o user receiver existe
        const userReceiverExists = await userRepositories.findOne(user_receiver);

        if(!userReceiverExists) {
            throw new Error("User receiver does not exist")
        }
        
        //se tudo ok, cria compliment
        const compliment = complimentRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentRepositories.save(compliment);
        
        return compliment;
    }

}

export { CreateComplimentService };