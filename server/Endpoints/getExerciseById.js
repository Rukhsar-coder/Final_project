const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//>>>>>>>>>>>----- getExerciseById ------>>>>>>>>>>>>>>>>>>>>>
const getExerciseById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");

  //Transform _id string to number so we can use it to search for exercise _id
  const id = req.params.id;
  try {
    await client.connect();

    const exerciseById = await db.collection("Exercise").findOne({ id: id });

    console.log(exerciseById);
    if (exerciseById) {
      return res.status(200).json({
        status: 200,
        data: exerciseById,
        message: "Successfully retrieved Single Exercise",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to retrieve Single Exercise" });
    }
    client.close();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { getExerciseById };
