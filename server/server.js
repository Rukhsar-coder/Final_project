"use strict";
//Defines that JavaScript code should be executed in "strict mode".
// const path = require("path");
const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");

const { getExerciseInfo } = require("./Endpoints/getExerciseInfo");
// const { getAllBodyParts } = require("./Endpoints/getAllBodyParts");
// const { GetAllEquipment } = require("./Endpoints/getAllEquipment");
// const { getAllMuscles } = require("./Endpoints/getAllMuscles");
const { getExerciseById } = require("./Endpoints/getExerciseById");
//---------------------------------------------

const {
  getExerciseByCategory,
  addNewPatient,
  searchTerm,
  getCartExercise,
} = require("./Endpoints/handlers");

// const { getExerciseCategory } = require("./handlers/exerciseCategory");
const PORT = 8000;

var app = express();

app.use(express.json());
//---------------End Points----------------
app.get("/api/exerciseinfo", getExerciseInfo);
// app.get("/api/exerciseinfo_body/:bodyPart", getAllBodyParts);
app.get("/api/exerciseinfo/:id", getExerciseById);
// app.get("/api/equipment", GetAllEquipment);
// app.get("/api/muscles", getAllMuscles);
//----------------------------------------------------------------
//api to get all exercise target as category
app.get("/api/exercise-target-as/:category", getExerciseByCategory);

// api to add a new customer or just add exerciseInfo for existing customers
app.post("/api/add-new-patient", addNewPatient);

// api to search products by name
app.get("/api/searchterm", searchTerm);

// api to get all cartexercise
app.post("/api/cart-exercise", getCartExercise);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

app.listen(PORT, function () {
  console.info("🌍 Listening on port " + PORT);
});
