const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const getAllItems = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const db = client.db("Doctor");

  try {
    await client.connect();
    console.log("connected!");
    const dbItems = await db.collection("Exercises").find().toArray();
    client.close();

    if (dbItems) {
      return res
        .status(200)
        .json({
          status: 200,
          data: dbItems,
          message: "Successfully retrieved items",
        });
    } else {
      res
        .status(400)
        .json({ status: 400, message: "Unable to retrieve items" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, message: error.message });
  }
};
module.exports = { getAllItems };
