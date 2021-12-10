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

const getmuscle = async () => {
  try {
    let muscle;
    await fetch("https://wger.de/api/v2/muscle/", options)
      .then((res) => res.json())
      .then((data) => {
        muscle = data.results;
      });

    return muscle;
  } catch (err) {
    console.log(err);
  }
};

// getmuscle().then((data) => console.log(data));

module.exports = { getmuscle };
