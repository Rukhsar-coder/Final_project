import React, { createContext, useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
export const ExerciseContext = createContext(null);

export const ExerciseProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState("loading");
  const [exerciseItems, setExerciseItems] = useState([]);
  const [exerciseRefresh, setexerciseRefresh] = useState(false);

  useEffect(() => {
    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => {
        setStatus("idle");
        setExerciseItems(data.data);
      });
  }, [exerciseRefresh]);

  if (status === "loading") {
    return <CircularProgress />;
  }
  if (status === "idle") {
    console.log("items");
  }

  return (
    <ExerciseContext.Provider
      value={{
        exerciseItems,
        status,
        setExerciseItems,
        setStatus,
        exerciseRefresh,
        setexerciseRefresh,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};
