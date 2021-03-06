const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//>>>>>>>>>>>----- getSingleUser ------>>>>>>>>>>>>>>>>>>>>>
const getSingleUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("DoctorAcess");

  const _id = req.params._id;
  try {
    await client.connect();

    const userById = await db.collection("patient").findOne({ _id: _id });

    if (userById) {
      return res.status(200).json({
        status: 200,
        data: userById,
        message: "Successfully retrieved Single user",
      });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to retrieve Single user" });
    }
    client.close();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = { getSingleUser };
