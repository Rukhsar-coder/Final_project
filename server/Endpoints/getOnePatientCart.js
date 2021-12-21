const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//>>>>>>>>>>>----- getOnePatientCart ------>>>>>>>>>>>>>>>>>>>>>
const getOnePatientCart = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");
  const email = req.params.email;
  console.log(email);

  try {
    await client.connect();
    console.log("You are connected!");

    const patientByEmail = await db
      .collection("cart")
      .findOne({ email: email });

    console.log(patientByEmail);
    if (patientByEmail) {
      return res.status(200).json({
        status: 200,
        data: patientByEmail,
        message: "Successfully retrieved Single Patient Confirmation",
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "Unable to retrieve Single Patient Confirmation",
      });
    }
    client.close();
    console.log("Disconnected!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { getOnePatientCart };
