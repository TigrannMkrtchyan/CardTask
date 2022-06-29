"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let arr = [];
router.get("/", (req, res) => {
    res.send({ data: arr, success: true });
});
router.post("/", (req, res) => {
    const { cardNumber } = req.body;
    arr.push(cardNumber);
    res.send({ data: cardNumber, success: true });
});
router.delete("/", (req, res) => {
    const { cardNumber } = req.body;
    arr = arr.filter((value) => value !== cardNumber);
    res.send({ data: arr, success: true });
});
exports.default = router;
