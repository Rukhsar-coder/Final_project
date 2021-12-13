const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//>>>>>>>>>>>----- getExerciseByEquipment ------>>>>>>>>>>>>>>>>>>>>>
const getExerciseByEquipment = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");
  const equipment = req.params.equipment;
  console.log(equipment);

  try {
    await client.connect();
    console.log("You are connected!");

    const exerciseByEquipment = await db
      .collection("Exercise")
      .findOne({ equipment: equipment });

    console.log(equipment);
    if (exerciseByEquipment) {
      return res.status(200).json({
        status: 200,
        data: exerciseByEquipment,
        message: "Successfully retrieved exercise By Equipment",
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "Unable to retrieve exercise By Equipment",
      });
    }
    client.close();
    console.log("Disconnected!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};
// getExerciseByEquipment();

module.exports = { getExerciseByEquipment };
