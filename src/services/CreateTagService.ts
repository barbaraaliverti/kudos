import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";


class CreateTagService {
    async execute(name: string) {
        const tagRepositories = getCustomRepository(TagRepositories);

        //verifica se a tag está preenchida
        if(!name) {
            throw new Error("Invalid name");
        }

        //verifica se já tem uma tag com o mesmo nome
        //SELECT * FROM Tags WHERE name = "name"
        const tagAlreadyExists = await tagRepositories.findOne({
            name
        });

        if(tagAlreadyExists) {
            throw new Error("Tag already exists");
        }

        //cria nova tag
        const tag = tagRepositories.create({
            name,
        });

        await tagRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService }