"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("http-errors");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const index_1 = require("./routes/index");
const app = express();
app.use(cors({
    origin: "*",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", index_1.default);
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404));
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
