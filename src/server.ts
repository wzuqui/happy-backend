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

app.use("/info", (_, res) => {
  console.log(process.env);
  res.status(200).json({
    message: "OK",
  });
});

app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(erroHandler);

app.listen(process.env.PORT || 3333);
