// const { json } = require("body-parser");
const request = require("request");
const fetch = require("node-fetch");

const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": "d530c181aemshdc02fcc0067e117p1dc3fajsn698c441aa31a",
    useQueryString: true,
  },
};

const getExerciseInfo = async () => {
  try {
    let parsedResponse;
    const response = await request(options, function (error, response, body) {
      if (error) throw new Error(error);
      // console.log(body);
      //When receiving data from a web server, the data is always a string.
      // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
      parsedResponse = JSON.parse(body);
      // console.log(Object.keys(response));
      // console.log(parsedResponse);
    });
    return parsedResponse;
    // return response;
  } catch (err) {
    console.log(err);
  }
};

// getExerciseInfo().then((data) => console.log(data));

module.exports = { getExerciseInfo };
