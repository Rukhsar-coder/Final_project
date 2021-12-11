const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//>>>>>>>>>>>----- GetAllMuscles ------>>>>>>>>>>>>>>>>>>>>>
const getAllMuscles = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("Doctor");

  try {
    await client.connect();
    // console.log("connected!");

    const dbmuscle = await db.collection("Muscles").find().toArray();

    if (dbmuscle) {
      return res.status(200).json({
        status: 200,
        data: dbmuscle,
        message: "Successfully retrieved Muscles",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to retrieve Muscles" });
    }
    client.close();
    console.log("Disconnected!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { getAllMuscles };
