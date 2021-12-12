const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//>>>>>>>>>>>----- getExerciseById ------>>>>>>>>>>>>>>>>>>>>>
const getAllBodyParts = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");

  //Transform _id string to number so we can use it to search for exercise _id
  const bodyPart = req.params.bodyPart;
  console.log(bodyPart);

  try {
    await client.connect();
    console.log("You are connected!");

    const exerciseBybodyPart = await db
      .collection("Exercise")
      .findOne({ bodyPart: bodyPart });

    console.log(bodyPart);
    if (exerciseBybodyPart) {
      return res.status(200).json({
        status: 200,
        data: exerciseBybodyPart,
        message: "Successfully retrieved Body Parts",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to retrieve Body Parts" });
    }
    client.close();
    console.log("Disconnected!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};
getAllBodyParts();

module.exports = { getAllBodyParts };
