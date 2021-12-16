const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//>>>>>>>>>>>----- add One New physio Signup ------>>>>>>>>>>>>>>>>>>>>>
const addPhysioSignup = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");
  const newPhysio = req.body;
  console.log(newPhysio);

  try {
    await client.connect();
    console.log("You are connected!");

    const addOnePhysio = await db.collection("physio").insertOne(newPhysio);

    console.log(addOnePhysio);
    if (addOnePhysio) {
      return res.status(200).json({
        status: 200,
        data: addOnePhysio,
        message: "Successfully Added One new physio",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to add one new physio" });
    }
    client.close();
    console.log("Disconnected!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { addPhysioSignup };
