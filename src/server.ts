import express from "express";
import path from "path";
import cors from "cors";

import "express-async-errors";

import "./database/connection";

import routes from "./routes";
import erroHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());


app.use("", (_, res) => {
  res.send("<h1>Bem vindo ao backend do happy</h1>");
});

app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(erroHandler);

app.listen(process.env.PORT || 3333);
