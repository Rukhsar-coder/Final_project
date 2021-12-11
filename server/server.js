"use strict";
//Defines that JavaScript code should be executed in "strict mode".
// const path = require("path");
const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");

const { getExerciseInfo } = require("./Endpoints/getExerciseInfo");
// const { GetAllBodyParts } = require("./Endpoints/getAllBodyParts");
// const { GetAllEquipment } = require("./Endpoints/getAllEquipment");
// const { getAllMuscles } = require("./Endpoints/getAllMuscles");
const { getExerciseById } = require("./Endpoints/getExerciseById");

// const { getExerciseCategory } = require("./handlers/exerciseCategory");
const PORT = 8000;

var app = express();

app.use(express.json());
//---------------End Points----------------
app.get("/api/exerciseinfo", getExerciseInfo);
// app.get("/api/exerciseinfo/:bodyPart", GetAllBodyParts);
app.get("/api/exerciseinfo/:id", getExerciseById);
// app.get("/api/equipment", GetAllEquipment);
// app.get("/api/muscles", getAllMuscles);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

app.listen(PORT, function () {
  console.info("🌍 Listening on port " + PORT);
});
