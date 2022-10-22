import express, { Express, Request, Response } from "express";
import routes from "./routes";

const PORT: number = parseInt(process.env.PORT as string, 10) || 8000;

const app: Express = express();

app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
