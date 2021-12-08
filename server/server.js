"use strict";
//Defines that JavaScript code should be executed in "strict mode".
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  handleExercise,
  getExerciseCategory,
  getEquipmentList,
} = require("./handlers/handlers");

const PORT = 8000;

var app = express();

app.use(express.json());

//---------------------End Point--------------------------
app.get("/hello", (req, res) => {
  res.status(200).json({ hi: "hi............." });
});
//----------all the list of Exercise Information-----------
app.get("/exercise", (req, res) => {
  const { type } = req.params;
  getExerciseCategory(type)
    .then((name) => {
      return res.status(200).json({ status: "200", name });
    })
    .catch((err) => {
      res.status(400).json({ status: "400", message: err.message });
    });
});
//---------------list of bodyparts----------------
app.get("/category", (req, res) => {
  const { type } = req.params;
  getEquipmentList(type)
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
