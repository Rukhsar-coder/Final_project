"use strict";
//Defines that JavaScript code should be executed in "strict mode".
const express = require("express");

const { getExerciseInfo } = require("./Endpoints/getExerciseInfo");
const { getExerciseById } = require("./Endpoints/getExerciseById");
const { getAllBodyParts } = require("./Endpoints/getAllBodyParts");
// const { getExerciseByEquipment } = require("./Endpoints/getExerciseByEquipment");
const { getTargetMuscle } = require("./Endpoints/getTargetMuscle");
//---------------------------------------------

const {
  getExerciseByCategory,
  addNewPatient,
  searchTerm,
  getExerciseCart,
} = require("./Endpoints/handlers");

const PORT = 8000;

var app = express();

app.use(express.json());
//---------------End Points----------------
app.get("/api/exerciseinfo", getExerciseInfo);
app.get("/api/exerciseinfo/:id", getExerciseById);
app.get("/api/exerciseinfo_bodyPart/:bodyPart", getAllBodyParts);
// app.get("/api/exerciseinfo/:equipment", getExerciseByEquipment);
app.get("/api/exerciseinfo_target/:target", getTargetMuscle);
//----------------------------------------------------------------
//api to get all exercise target as category
app.get("/api/exercise-target-as/:category", getExerciseByCategory);

// api to add a new customer or just add exerciseInfo for existing customers
app.post("/api/add-new-patient", addNewPatient);

// api to search products by name
app.get("/api/searchterm", searchTerm);

// api to get all cartexercise
app.post("/api/cart-exercise", getExerciseCart);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

app.listen(PORT, function () {
  console.info("🌍 Listening on port " + PORT);
});
