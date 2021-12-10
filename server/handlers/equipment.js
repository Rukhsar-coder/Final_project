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

const getEquipmentList = async () => {
  try {
    let equipment;
    await fetch("https://wger.de/api/v2/equipment/", options)
      .then((res) => res.json())
      .then((data) => {
        equipment = data.results;
      });

    return equipment;
  } catch (err) {
    console.log(err);
  }
};

// getEquipmentList().then((data) => console.log(data));

module.exports = { getEquipmentList };
