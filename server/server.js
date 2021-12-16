"use strict";
//Defines that JavaScript code should be executed in "strict mode".
const express = require("express");

const { getExerciseInfo } = require("./Endpoints/getExerciseInfo");
const { getExerciseById } = require("./Endpoints/getExerciseById");
const { getAllBodyParts } = require("./Endpoints/getAllBodyParts");
const {
  getExerciseByEquipment,
} = require("./Endpoints/getExerciseByEquipment");
const { getTargetMuscle } = require("./Endpoints/getTargetMuscle");
const { getOrder } = require("./Endpoints/getOrder");
const { addToCart } = require("./Endpoints/addToCart");
const {
  getAllExerciseFromCart,
} = require("./Endpoints/getAllExerciseFromCart");
const { addAllExerciseToCart } = require("./Endpoints/addAllExerciseToCart");
const { addPatientSignup } = require("./Endpoints/addPatientSignup");
const { getAllListOfPatient } = require("./Endpoints/getAllListOfPatient");
const { addPhysioSignup } = require("./Endpoints/addPhysioSignup");
const { getSingleUser } = require("./Endpoints/getSingleUser");
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
app.get("/api/exerciseinfo_equipment/:equipment", getExerciseByEquipment);
app.get("/api/exerciseinfo_target/:target", getTargetMuscle);
//----------------------------------------------------------------

//api to get all exercise target as category
app.get("/api/order/:_id", getOrder);

app.get("/api/exercise-target-as/:category", getExerciseByCategory);

//-------- add a new patient-----------
app.post("/api/add-new-patient", addNewPatient);

//---------add a ONE new exercise to DB-----------
app.post("/api/cart/addExercise", addToCart);

//---------add a ONE new patient to DB-----------
app.post("/api/patient/addPatient", addPatientSignup);

//---------add a ONE new patient to DB-----------
app.post("/api/patient/addPatient", addPatientSignup);

//---------GET a ONE----USER--- to DB-----------
app.post("/api/Single-user/get", getSingleUser);

//---------add a ONE new physio to DB-----------
app.post("/api/physio/addPhysio", addPhysioSignup);

//---------add a all  exercise to DB--------------
app.post("/api/add-all-Exercise/cart", addAllExerciseToCart);

//-------- GET a all  exercise form DB cart--------------
app.get("/api/get-all-Exercise/cart", getAllExerciseFromCart);
//-------- GET a all  patient form DB cart--------------
app.get("/api/get-all-patient/cart", getAllListOfPatient);

// api to search products by name
app.get("/api/searchterm", searchTerm);

//--------- GET find the specific exercise form exercise DB exercise-------------
app.get("/api/cart-exercise", getExerciseCart);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

app.listen(PORT, function () {
  console.info("🌍 Listening on port " + PORT);
});
