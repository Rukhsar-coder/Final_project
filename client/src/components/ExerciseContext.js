import React, { createContext, useReducer, useState } from "react";

export const ExerciseContext = createContext(null);

const initialState = {
  Exercise: [],
  categoryExercise: [], //yet to get endpoint working
  searchExercise: [],
  cart: [],
};

const patientInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    //
    case "receive-exercise-info-from-server": {
      return {
        ...state,
        hasLoaded: true,
        exercise: action.exercise,
      };
    }

    case "set-loading-state": {
      return {
        ...state,
        hasLoaded: action.hasLoaded,
      };
    }

    case "unset-loading-state": {
      return {
        ...state,
        hasLoaded: action.hasLoaded,
      };
    }

    case "update-patient-cart": {
      return {
        ...state,
        cart: action.cart,
      };
    }

    case "clear-patient-cart": {
      return {
        ...state,
        cart: [],
      };
    }

    case "receive-category-exercise-info-from-server": {
      return {
        ...state,
        categoryExercise: action.categoryExercise,
      };
    }

    case "receive-search-exercise-info-from-server": {
      return {
        ...state,
        searchExercise: action.searchExercise,
      };
    }

    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
}

export const ExerciseProvider = ({ children }) => {
  //to save the log in paitent information in sessionStorage
  const [user, setUser] = useState();
  const [physio, setPhysio] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [patientInfo, setPatientInfo] = useState(patientInitialState);

  //the exercise fetch dispatch function set up for pagination.
  //The existing array is duplicated with spread and the concatenated with the new incoming data.
  const receiveExerciseInfoFromServer = (data) => {
    dispatch({
      type: "receive-exercise-info-from-server",
      exercise: [...state.exercise].concat(data),
    });
  };

  const receiveCategoryExerciseInfoFromServer = (data) => {
    //yet to creat the endpoint
    dispatch({
      type: "receive-category-exercise-info-from-server",
      categoryExercise: [...state.categoryExercise].concat(data),
    });
  };

  const receiveSearchExerciseInfoFromServer = (data) => {
    //work in progress
    dispatch({
      type: "receive-search-exercise-info-from-server",
      searchExercise: data,
    });
  };

  const clearPatient = () => {
    window.localStorage.removeItem("cart");
    dispatch({
      type: "clear-patient-cart",
      cart: [],
    });
  };

  const addPatient = (data) => {
    let updateArray = [];

    if (state.cart.length === 0) {
      updateArray = [...state.cart].concat(data);
      window.localStorage.setItem("cart", JSON.stringify(updateArray));
    } else if (
      [...state.cart].filter(
        (exercise) => exercise.product_id === data[0].product_id
      ).length === 0
    ) {
      updateArray = [...state.cart].concat(data);
      window.localStorage.setItem("cart", JSON.stringify(updateArray));
    } else {
      updateArray = [...state.cart].map((exercise) => {
        if (exercise.product_id === data[0].product_id) {
          return { ...exercise, quantity: exercise.quantity + 1 };
        } else {
          return exercise;
        }
      });
      window.localStorage.setItem("cart", JSON.stringify(updateArray));
    }

    dispatch({
      type: "update-patient-cart",
      cart: updateArray,
    });
  };

  const removeExercise = (data) => {
    let updateArray = [];

    if (state.cart.length === 1) {
      updateArray = [];
    } else {
      updateArray = [...state.cart].filter(
        (exercise) => exercise.product_id !== data[0].product_id
      );
    }
    window.localStorage.getItem("cart", JSON.stringify(updateArray));

    dispatch({
      type: "update-patient-cart",
      cart: updateArray,
    });
  };

  return (
    <ExerciseContext.Provider
      value={{
        state,
        receiveExerciseInfoFromServer,
        clearPatient,
        addPatient,
        removeExercise,
        receiveCategoryExerciseInfoFromServer,
        receiveSearchExerciseInfoFromServer,
        patientInfo,
        setPatientInfo,
        user,
        setUser,
        physio,
        setPhysio,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};
