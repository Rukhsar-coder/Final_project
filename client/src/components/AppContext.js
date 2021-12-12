import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [exercise, setExercise] = useState([]);
  const [bodyPartInfo, setBodyPartInfo] = useState([]);
  const [equipmentNames, setEquipmentNames] = useState([]);
  const [targetMuscles, setTargetMuscles] = useState([]);

  const [selectedWorkout, setSelectedWorkout] = useState([]);

  useEffect(() => {
    fetch("/api/exerciseinfo")
      .then((resp) => resp.json())
      .then((json) => setExercise(json.data));
  }, []);

  // useEffect(() => {
  //   fetch("/api/categories")
  //     .then((res) => res.json())
  //     .then((json) => setCategories(json.data));
  // }, []);

  // useEffect(() => {
  //   fetch("/api/equipment")
  //     .then((res) => res.json())
  //     .then((json) =>
  //       setEquipmentNames(() =>
  //         json.data.map((item) => {
  //           return { name: item.name, _id: item.id };
  //         })
  //       )
  //     );
  // }, []);

  // useEffect(() => {
  //   fetch("/api/muscles")
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //       setMusclesInfo(json.data);
  //     });
  // }, []);

  return (
    <AppContext.Provider
      value={{
        exercise,
        bodyPartInfo,
        equipmentNames,
        targetMuscles,
        selectedWorkout,
        setSelectedWorkout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
