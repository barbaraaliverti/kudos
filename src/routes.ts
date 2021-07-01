import { response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAuthentication } from "./middlewares/ensureAuthentication";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListSentComplimentsController } from "./controllers/ListSentComplimentsController";
import { ListReceivedComplimentsController } from "./controllers/ListReceivedComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listSentComplimentsController = new ListSentComplimentsController();
const listReceivedComplimentsController = new ListReceivedComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();


router.post("/users", createUserController.handle);

//todas as rotas que vierem depois dessa middleware terão que passar por ela, então é melhor inserir somente nas requisições em que essa validação é necessária
// router.use(ensureAdmin);

router.post("/tags", ensureAuthentication, ensureAdmin , createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments",  ensureAuthentication, createComplimentController.handle);

router.get("/users/compliments/sent", ensureAuthentication, listSentComplimentsController.handle);
router.get("/users/compliments/received", ensureAuthentication, listReceivedComplimentsController.handle);
router.get("/tags", ensureAuthentication, listTagsController.handle);
router.get("/users", ensureAuthentication, listUsersController.handle);

export { router };