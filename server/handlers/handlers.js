const { getExerciseInfo } = require("./exerciseInfo");
const { getExerciseCategory } = require("./exerciseCategory");

const handleExercise = async (type) => {
  let exerciseType;
  if (type === "name") {
    exerciseType = getExerciseInfo();
  } else if (type === "category") {
    exerciseType = getExerciseCategory();
    //   } else if (type === "tronald") {
    //     jokeType = getTronaldDumpQuote;
  } else {
    throw new Error("Unrecoginzed exercise type");
  }

  const response = await exerciseType();
  return response;
};

module.exports = { handleExercise };
