const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//>>>>>>>>>>>----- getExerciseByCategory  ------>>>>>>>>>>>>>>>>>>>>>
const getExerciseByCategory = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");

  const target = req.params.target;
  console.log(target);

  try {
    await client.connect();
    console.log("You are connected!");

    const exerciseBytarget = await db
      .collection("Exercise")
      .findOne({ target: target });

    console.log(target);
    if (exerciseBytarget) {
      return res.status(200).json({
        status: 200,
        data: exerciseBytarget,
        message: "Successfully retrieved exercise By target Category",
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "Unable to retrieve exercise By target Category",
      });
    }
    client.close();
    console.log("Disconnected!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

//-------------------------------------------------------------------------------------
//                          addNewPatient
//-------------------------------------------------------------------------------------

const addNewPatient = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");
  await client.connect();
  console.log("connected");

  //check to see if user already exists so we add the exercise info to that user instead of creating a new document in the collection
  try {
    const exerciseId = uuidv4();
    const _id = uuidv4();
    const newEntry = await db
      .collection("patient")
      .insertOne({ _id: _id, exerciseId: exerciseId, ...req.body });
    //if it's a new user we simple create the new document in Mongo
    res.status(200).json({ status: 200, data: req.body });
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, error: err.message });
  } finally {
    await client.close();
    console.log("disconnected");
  }
};

//----------------------------------------------------------------------------
//                                  searchTerm
//----------------------------------------------------------------------------

//Search bar endpoint. Allows text string search in whole collection.
const searchTerm = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");

  const { searchTerm } = req.query;

  try {
    await client.connect();

    db.collection("exercise").createIndex({
      name: "text",
      target: "text",
      bodypart: "text",
      equipment: "text",
    });

    //this is where the magic happens, the $text & $search operator combo is insanely powerful.
    const query = { $text: { $search: searchTerm } };
    const searchResult = await db.collection("exercise").find(query).toArray();

    if (searchResult.length > 0) {
      res.status(200).json({ status: 200, data: searchResult });
    } else {
      res.status(404).json({
        status: 404,
        data: searchResult,
        message: "No results found for your search",
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 500, error: err.message });
  } finally {
    client.close();
  }
};

//----------------------------------------------------------------------------
//                                  getExerciseCart
//----------------------------------------------------------------------------

//This allows us to get the entire exercise object for the patient in the cart to display
const getExerciseCart = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");

  // we use the array of exercise id we have in state or storage to find the specific exercise.
  // Mongo allows the use of an array to select multiple objects with the $in operator!
  let searchArray = req.body.map((i) => Number(i.product_id));
  try {
    await client.connect();
    const exerciseCart = await db
      .collection("exercise")
      .find({ _id: { $in: searchArray } })
      .toArray();

    client.close();

    if (exerciseCart) {
      res.status(200).json({ status: 200, data: exerciseCart });
    } else {
      res.status(404).json({ status: 404, message: "Not found" });
    }
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
  }
};

module.exports = {
  getExerciseByCategory,
  addNewPatient,
  searchTerm,
  getExerciseCart,
};
