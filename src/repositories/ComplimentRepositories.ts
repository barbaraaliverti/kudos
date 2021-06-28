import { Repository, EntityRepository } from "typeorm";
import { Compliments } from "../entities/Compliments";

@EntityRepository(Compliments)
class ComplimentRepositories extends Repository<Compliments> {}

export { ComplimentRepositories };