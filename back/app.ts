import createError from "http-errors";
import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";
import * as cookieParser from "cookie-parser";
import path from "path";

import indexRouter from "./routes/index";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

const PORT = process.env.PORT || "8080";
// tslint:disable-next-line:no-console
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
