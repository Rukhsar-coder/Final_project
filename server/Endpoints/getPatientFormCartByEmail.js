const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//>>>>>>>>>>>----- addAllExerciseToCart ------>>>>>>>>>>>>>>>>>>>>>
const getPatientFormCartByEmail = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");
  const email = req.params.email;

  try {
    await client.connect();

    const addAllExercise = await db.collection("cart").findOne(email);

    if (addAllExercise) {
      return res.status(200).json({
        status: 200,
        data: addAllExercise,
        message: "Successfully retrive all exercise",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to retrive all exercise" });
    }
    client.close();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { getPatientFormCartByEmail };
