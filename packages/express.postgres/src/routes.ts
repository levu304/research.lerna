import { Router } from "express";
import { getAbout, getIndex } from "./controllers/pages";

const routes: Router = Router();

routes.get("/", getIndex);

routes.get("/about", getAbout);

export default routes;
