const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//>>>>>>>>>>>----- getAllListOfPatient ------>>>>>>>>>>>>>>>>>>>>>
const getAllListOfPatient = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");
  const AllListOfPatient = req.body;

  try {
    await client.connect();
    console.log("You are connected!");

    const listOfPatient = await db.collection("patient").find().toArray();
    if (listOfPatient) {
      return res.status(200).json({
        status: 200,
        data: listOfPatient,
        message: "Successfully retrive all patient",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to retrive all patient" });
    }
    client.close();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { getAllListOfPatient };
