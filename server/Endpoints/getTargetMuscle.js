const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//>>>>>>>>>>>----- getTargetMuscle ------>>>>>>>>>>>>>>>>>>>>>
const getTargetMuscle = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");
  const target = req.params.target;
  console.log(target);

  try {
    await client.connect();
    console.log("You are connected!");

    const targetMuscle = await db
      .collection("Exercise")
      .find({ target: target })
      .toArray();

    console.log(target);
    console.log(targetMuscle);
    if (targetMuscle) {
      return res.status(200).json({
        status: 200,
        data: targetMuscle,
        message: "Successfully retrieved target Muscle",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to retrieve target Muscle" });
    }
    client.close();
    console.log("Disconnected!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};
// getTargetMuscle();

module.exports = { getTargetMuscle };
