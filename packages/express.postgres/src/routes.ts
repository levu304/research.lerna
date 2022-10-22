import { Router, Request, Response } from "express";

const routes: Router = Router();

routes.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello index",
  });
});

export default routes;
