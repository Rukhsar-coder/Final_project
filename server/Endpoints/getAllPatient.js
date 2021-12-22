const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//>>>>>>>>>>>----- addToCart ------>>>>>>>>>>>>>>>>>>>>>
const getAllPatient = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");

  try {
    await client.connect();

    const getAllPatient = await db.collection("patient").find().toArray();

    if (getAllPatient) {
      return res.status(200).json({
        status: 200,
        data: addOneExercise,
        message: "Successfully retrive all Patient",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to retrive all Patient" });
    }
    client.close();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { getAllPatient };
