var express = require('express');
var router = express.Router();

let arr = []

router.get('/', function (req, res) {
  res.send({ data: arr, success: true });
});

router.post('/', function (req, res) {
  const { number } = req.body;
  arr.push(number)
  res.send({ data: number, success: true });
});

router.delete('/', function (req, res) {
  const { number } = req.body;
  arr = arr.filter((value) => value !== number)
  res.send({ data: arr, success: true });
});

module.exports = router;
