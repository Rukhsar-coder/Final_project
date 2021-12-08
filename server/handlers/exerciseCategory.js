const request = require("request");
const fetch = require("node-fetch");

const options = {
  headers: {
    Accept: "application/json",
    Authentication: "Token 51d18ac5826488317361c3ad3f387dbdd1742761",
    "Content-Type": "application/json",
  },
  json: true,
  method: "GET",
};

const getExerciseCategory = async () => {
  try {
    let category;
    await fetch("https://wger.de/api/v2/exercisecategory/", options)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        // console.log("-------------");
        category = data.results;
      });

    // console.log(category, "category");
    // console.log("================");
    return category;
  } catch (err) {
    console.log(err);
  }
};

// getExerciseCategory().then((data) => console.log(data));

module.exports = { getExerciseCategory };
