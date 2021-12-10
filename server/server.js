"use strict";
//Defines that JavaScript code should be executed in "strict mode".
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { getExerciseInfo } = require("./Endpoints/getExerciseInfo");
const { GetAllBodyParts } = require("./Endpoints/getAllBodyParts");
const { GetAllEquipment } = require("./Endpoints/getAllEquipment");

// const { getExerciseCategory } = require("./handlers/exerciseCategory");
const PORT = 8000;

var app = express();

app.use(express.json());

//---------------------End Point--------------------------
// app.get("/hello", (req, res) => {
// res.status(200).json({ hi: "hi............." });
// });
//----------all the list of Exercise Information-----------
// app.get();
//---------------End Points----------------
app.get("/api/category", GetAllBodyParts);
app.get("/api/exerciseinfo", getExerciseInfo);
app.get("/api/equipment", GetAllEquipment);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

app.listen(PORT, function () {
  console.info("🌍 Listening on port " + PORT);
});
