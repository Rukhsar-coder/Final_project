const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//>>>>>>>>>>>----- GetAllBodyParts ------>>>>>>>>>>>>>>>>>>>>>
const GetAllBodyParts = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");

  try {
    await client.connect();
    // console.log("connected!");
    //declaring a variable to hold req.param.companyId.
    // const bodyPart = req.params.bodyPart;
    //Transform _id string to number so we can use it to search for exercise _id
    // const bodyPart = req.params.bodyPart;
    // console.log(bodyPart);

    const dbBodyParts = await db
      .collection("Exercise")
      .find({ bodyPart: bodyPart })
      .toArray();

    console.log(dbBodyParts);
    if (dbBodyParts) {
      return res.status(200).json({
        status: 200,
        data: dbBodyParts,
        message: "Successfully retrieved BodyParts",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to retrieve BodyParts" });
    }
    client.close();
    console.log("Disconnected!");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};
GetAllBodyParts();

module.exports = { GetAllBodyParts };
