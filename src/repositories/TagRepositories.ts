//camada com métodos que faz a comunicação com o BD
import { EntityRepository, Repository} from "typeorm";
import { Tag } from "../entities/Tag";


@EntityRepository(Tag)
class TagRepositories extends Repository<Tag> {}

export { TagRepositories }