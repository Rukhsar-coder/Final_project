const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//>>>>>>>>>>>----- getExerciseInfo ------>>>>>>>>>>>>>>>>>>>>>
const getExerciseInfo = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");

  try {
    await client.connect();
    const dbExercise = await db.collection("Exercise").find().toArray();

    if (dbExercise) {
      return res.status(200).json({
        status: 200,
        data: dbExercise,
        message: "Successfully retrieved ExerciseInfo",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to retrieve ExerciseInfo" });
    }
    client.close();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { getExerciseInfo };
