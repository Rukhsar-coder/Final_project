// const fs = require("file-system");

const { MongoClient } = require("mongodb");
const { getExerciseInfo } = require("./handlers/exerciseInfo");
const { getExerciseCategory } = require("./handlers/exerciseCategory");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// const exerciseInfo = [];

// Object.keys(results).forEach((category) => {
//   exerciseInfo.push({
//     _id: category,
//     name: results[category],
//   });
// });

const batchImport = async () => {
  const exerciseInfo = await getExerciseInfo();
  const listOfCategory = await getExerciseCategory();

  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("You are connected");

    const db = client.db("Doctor");

    // add exercise result info to collection on mongodb
    await db.collection("Exercise").insertMany(exerciseInfo);

    // add Category result info to collection on mongodb
    await db.collection("Category").insertMany(listOfCategory);

    console.log({ status: 201 });
  } catch (err) {
    console.log(err.message);
    console.log({ status: 500, message: err.message });
  }
  client.close();
  console.log("You are Disconnected");
};

batchImport();
