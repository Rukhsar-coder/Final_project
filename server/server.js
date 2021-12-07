"use strict";
//Defines that JavaScript code should be executed in "strict mode".
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { handleExercise } = require("./handlers/handlers");

const PORT = 8000;

var app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.status(200).json({ hi: "hi" });
});
app.get("/Exercise", (req, res) => {
  const { type } = req.params;
  handleExercise(type)
    .then((name) => {
      return res.status(200).json({ status: "200", name });
    })
    .catch((err) => {
      res.status(400).json({ status: "400", message: err.message });
    });
});
app.listen(PORT, function () {
  console.info("🌍 Listening on port " + PORT);
});
