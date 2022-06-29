import { Router, Request, Response } from "express";

const router = Router();

let arr = [];

router.get("/", (req: Request, res: Response) => {
  res.send({ data: arr, success: true });
});

router.post("/", (req: Request, res: Response) => {
  const { cardNumber } = req.body;
  arr.push(cardNumber);
  res.send({ data: cardNumber, success: true });
});

router.delete("/", (req: Request, res: Response) => {
  const { cardNumber } = req.body;
  arr = arr.filter((value) => value !== cardNumber);
  res.send({ data: arr, success: true });
});

export default router;
