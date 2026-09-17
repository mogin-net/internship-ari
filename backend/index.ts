import "dotenv/config";
import express, {
  type Express,
  type NextFunction,
  type Response,
  type Request,
} from "express";
import { authRouter } from "./src/routes/auth.js";
import charactersRouter from "./src/routes/characters.js";
import { errorHandler, notFoundHandler } from "./src/middlewares/errorHandler.js";
import db from "./src/util/pg.js";
import cors from "cors";

const app: Express = express();
await db.connect ()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const middlewareTest = (req: Request, res: Response, next: NextFunction) => {
  console.log("Ini Middleware 1");
  next();
};
app.use(cors());

app.use("/auth", authRouter);
app.use("/characters", charactersRouter);


app.use(notFoundHandler)
app.use(errorHandler)

app.listen(3000, () => {
  console.log("SERVER JALAN!");
});