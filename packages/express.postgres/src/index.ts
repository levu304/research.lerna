import express, { Express } from "express";
import routes from "./routes";
import { join } from "path";

const PORT: number = parseInt(process.env.PORT as string, 10) || 8000;

const app: Express = express();

app.use(express.json());
app.use(express.static(join(__dirname, "uploads")));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
