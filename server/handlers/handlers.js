const { getExerciseInfo } = require("./Exerciseinfo");

const handleExercise = async (type) => {
  let ExerciseType;
  if (type === "name") {
    exerciseType = getExerciseInfo;
    //   } else if (type === "dad") {
    //     jokeType = getDadJoke;
    //   } else if (type === "tronald") {
    //     jokeType = getTronaldDumpQuote;
  } else {
    throw new Error("Unrecoginzed joke type");
  }

  const response = await exerciseType();
  return response;
};

module.exports = { handleExercise };
