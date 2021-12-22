const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//>>>>>>>>>>>----- add One New Patient Signup ------>>>>>>>>>>>>>>>>>>>>>
const addPatientSignup = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");
  const newPatient = req.body;
  console.log(newPatient);

  try {
    await client.connect();

    const addOnePatient = await db.collection("patient").insertOne(newPatient);

    if (addOnePatient) {
      return res.status(200).json({
        status: 200,
        data: addOneExercise,
        message: "Successfully Added One new Patient",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to add one new Patient" });
    }
    client.close();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { addPatientSignup };
