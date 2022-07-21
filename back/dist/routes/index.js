"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql2_1 = require("mysql2");
const router = (0, express_1.Router)();
const connection = (0, mysql2_1.createConnection)({
    host: "localhost",
    user: "root",
    database: "root",
    password: "root",
});
connection.connect((err) => {
    if (err) {
        // tslint:disable-next-line:no-console
        return console.error("Ошибка: " + err.message);
    }
    else {
        // tslint:disable-next-line:no-console
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});
const arr = [];
router.get("/", async (req, res) => {
    const sql = `CREATE TABLE if not exists cards( id int primary key auto_increment)`;
    connection.query(sql, (err, results) => {
        // tslint:disable-next-line:no-console
        if (err)
            console.log(err);
        // tslint:disable-next-line:no-console
        else
            console.log("table created");
    });
    const [rows] = await connection.promise().query("SELECT id FROM cards");
    const data = rows.map((value) => value.id);
    res.send({ data, success: true });
});
router.post("/", (req, res) => {
    const { cardNumber } = req.body;
    const data = [cardNumber];
    const sql = `INSERT INTO cards(id) VALUES (?)`;
    connection.query(sql, data, (err, results) => {
        // tslint:disable-next-line:no-console
        if (err)
            console.log(err);
        if (results) {
            res.send({ data: cardNumber, success: true });
        }
    });
});
router.delete("/", (req, res) => {
    const { cardNumber } = req.body;
    const sql = "DELETE FROM cards WHERE id=?";
    const data = [cardNumber];
    connection.query(sql, data, (err, results) => {
        // tslint:disable-next-line:no-console
        if (err)
            console.log(err);
        // tslint:disable-next-line:no-console
        console.log(results);
    });
    res.send({ data: arr, success: true });
});
exports.default = router;
