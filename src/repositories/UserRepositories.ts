//camada com métodos que faz a comunicação com o BD
import { EntityRepository, Repository} from "typeorm";
import { User } from "../entities/User";


@EntityRepository(User)
class UserRepositories extends Repository<User> {

}

export { UserRepositories }