// const { json } = require("body-parser");
const request = require("request");
const fetch = require("node-fetch");

const options = {
  // uri: "https://wger.de/api/v2/exerciseinfo/",
  headers: {
    Accept: "application/json",
    Authentication: "Token 51d18ac5826488317361c3ad3f387dbdd1742761",
    "Content-Type": "application/json",
    // Vary: "Accept",
  },
  json: true, //auto parse
  method: "GET",
};

const getExerciseInfo = async () => {
  try {
    let exercises;
    // await request(options, function (error, response, body) {
    //   console.log(body);
    // });
    await fetch("https://wger.de/api/v2/exerciseinfo/", options)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results[0]);
        exercises = data.results.filter((item) => {
          return item.name.includes("Kettlebell");
        });
      });
    console.log(exercises, "exercises");
    console.log("================");
    // return parsedResponse.name;
  } catch (err) {
    console.log(err);
  }
};

getExerciseInfo().then((data) => console.log(data));

module.export = { getExerciseInfo };
