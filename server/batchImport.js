// const fs = require("file-system");

const { MongoClient } = require("mongodb");

const request = require("request");
const fetch = require("node-fetch");
// const { getExerciseInfo } = require("./handlers/exerciseInfo");
// const { getExerciseCategory } = require("./handlers/exerciseCategory");
// const { getEquipmentList } = require("./handlers/equipment");
// const { getmuscle } = require("./handlers/muscles");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

const fetchoptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": "d530c181aemshdc02fcc0067e117p1dc3fajsn698c441aa31a",
    useQueryString: true,
  },
};
const batchImport = async () => {
  // const listOfCategory = await getExerciseCategory();
  // const listOfEquipment = await getEquipmentList();
  // const listOfMuscles = await getmuscle();

  try {
    await request(fetchoptions, async (error, response, body) => {
      const client = new MongoClient(MONGO_URI, options);
      await client.connect();
      console.log("You are connected");
      const db = client.db("DoctorAcess");
      if (error) throw new Error(error);
      const parsedResponse = JSON.parse(body);

      await db.collection("Exercise").insertMany(parsedResponse);
      console.log(parsedResponse);
      client.close();
      console.log("You are Disconnected");
    });

    console.log({ status: 201 });
  } catch (err) {
    console.log(err.message);
    console.log({ status: 500, message: err.message });
  }
};
// add exercise result info to collection on mongodb

// // add Category result info to collection on mongodb
// await db.collection("Category").insertMany(listOfCategory);

// // add equipment  info to collection on mongodb
// await db.collection("Equipment").insertMany(listOfEquipment);

// // add Muscles  info to collection on mongodb
// await db.collection("Muscles").insertMany(listOfMuscles);

batchImport();
