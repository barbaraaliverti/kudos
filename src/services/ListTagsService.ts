import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";
import { classToPlain } from "class-transformer";


class ListTagsService {
    async execute() {
        const tagRepositories = getCustomRepository(TagRepositories);

        const tags = await tagRepositories.find();
        // tags = tags.map((tag) => ({...tag, nameCustom: `#${tag.name}`})); adiciona um campo 'nameCustom'

        return classToPlain(tags);
    }
}

export { ListTagsService };