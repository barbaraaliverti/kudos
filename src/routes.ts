import { response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticadeUserController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);

//todas as rotas que vierem depois dessa middleware terão que passar por ela, então é melhor inserir somente nas requisições em que essa validação é necessária
// router.use(ensureAdmin);

router.post("/tags", ensureAdmin , createTagController.handle);
router.post("/login", authenticateUserController.handle);

export { router };