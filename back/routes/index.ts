import { Router, Request, Response } from "express";
import { createConnection, RowDataPacket } from "mysql2";

const router = Router();

const connection = createConnection({
  host: "localhost",
  user: "root",
  database: "root",
  password: "root",
});

connection.connect((err) => {
  if (err) {
    // tslint:disable-next-line:no-console
    return console.error("Ошибка: " + err.message);
  } else {
    // tslint:disable-next-line:no-console
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

router.get("/", async (req: Request, res: Response) => {
  const sql = `CREATE TABLE if not exists cards( id int primary key auto_increment)`;
  connection.query(sql, (err, results) => {
    if (err) res.send({ success: false, error: err });
    // tslint:disable-next-line:no-console
    else console.log("table created");
  });

  const [rows] = await connection.promise().query("SELECT id FROM cards");
  const data = (rows as RowDataPacket[]).map((value) => value.id);

  res.send({ data, success: true });
});

router.post("/", (req: Request, res: Response) => {
  const { cardNumber } = req.body;
  const data = [cardNumber];
  const sql = `INSERT INTO cards(id) VALUES (?)`;

  connection.query(sql, data, (err, results) => {
    if (err) res.send({ success: false, error: err });
    if (results) {
      res.send({ data: cardNumber, success: true });
    }
  });
});

router.delete("/", (req: Request, res: Response) => {
  const { cardNumber } = req.body;
  const sql = "DELETE FROM cards WHERE id=?";
  const data = [cardNumber];
  connection.query(sql, data, (err, results) => {
    if (err) res.send({ success: false, error: err });
    if (results) res.send({ success: true });
  });
});

export default router;
