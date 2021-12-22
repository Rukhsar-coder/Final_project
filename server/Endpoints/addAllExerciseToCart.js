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
const addAllExerciseToCart = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");
  const CartExercises = req.body;
  console.log(CartExercises);

  try {
    await client.connect();

    const addOneExercise = await db.collection("cart").insertOne(CartExercises);

    if (addOneExercise) {
      return res.status(200).json({
        status: 200,
        data: addOneExercise,
        message: "Successfully inserted all exercise",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to inserte all exercise" });
    }
    client.close();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { addAllExerciseToCart };
