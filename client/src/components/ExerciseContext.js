import React, { createContext, useReducer, useState, useEffect } from "react";

export const ExerciseContext = createContext(null);

const initialState = {
  hasLoaded: false,
  Exercise: [],
  categoryExercise: [], //yet to get endpoint working
  searchExercise: [],
  cart: [],
};

const patientInitialState = {
  firstName: "",
  lastName: "",
  phoneNum: "",
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

    case "update-document-cart": {
      return {
        ...state,
        cart: action.cart,
      };
    }

    case "clear-document-cart": {
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
  //for the limited content show on page
  const [paginationIndex, setPaginationIndex] = useState(0);
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
    window.localStorage.removeExercise("cart");
    dispatch({
      type: "clear-patient-cart",
      cart: [],
    });
  };

  const addPatient = (data) => {
    let updateArray = [];

    if (state.cart.length === 0) {
      updateArray = [...state.cart].concat(data);
      window.localStorage.setExercse("cart", JSON.stringify(updateArray));
    } else if (
      [...state.cart].filter(
        (exercise) => exercise.product_id === data[0].product_id
      ).length === 0
    ) {
      updateArray = [...state.cart].concat(data);
      window.localStorage.setExercise("cart", JSON.stringify(updateArray));
    } else {
      updateArray = [...state.cart].map((exercise) => {
        if (exercise.product_id === data[0].product_id) {
          return { ...exercise, quantity: exercise.quantity + 1 };
        } else {
          return exercise;
        }
      });
      window.localStorage.setExercise("cart", JSON.stringify(updateArray));
    }

    dispatch({
      type: "update-patient-cart",
      cart: updateArray,
    });
  };

  //idea is to add the number of Set as how many time in a day
  const addQuantity = (data) => {
    let updateArray = [];

    updateArray = [...state.cart].map((exercise) => {
      if (exercise.product_id === data[0].product_id) {
        return { ...exercise, quantity: exercise.quantity + 1 };
      } else {
        return exercise;
      }
    });

    window.localStorage.setExercise("cart", JSON.stringify(updateArray));

    dispatch({
      type: "update-patient-cart",
      cart: updateArray,
    });
  };

  //this one is created to check the exercise have min 1 not 0
  const lowerQuantity = (data) => {
    let updateArray = [];

    //eslint-disable-next-line
    updateArray = [...state.cart].map((exercise) => {
      if (exercise.product_id === data[0].product_id) {
        if (exercise.quantity !== 1) {
          return { ...exercise, quantity: exercise.quantity - 1 };
        } else if (exercise.quantity === 1) {
          console.log("0?");
        }
      } else {
        return exercise;
      }
    });

    window.localStorage.setExercise("cart", JSON.stringify(updateArray));

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
    window.localStorage.setExercise("cart", JSON.stringify(updateArray));

    dispatch({
      type: "update-patient-cart",
      cart: updateArray,
    });
  };

  //Loading state will allow us to use a loading component during async operations in other components
  const setLoadingState = () => {
    dispatch({
      type: "set-loading-state",
      hasLoaded: false,
    });
  };

  //revert loading state to true when async operations are done
  const unsetLoadingState = () => {
    dispatch({
      type: "unset-loading-state",
      hasLoaded: true,
    });
  };

  //We load the exercise from DB using pagination
  useEffect(() => {
    const limit = 20;
    let skip = 20 * paginationIndex;
    const cartStorage = window.localStorage.getItem("cart");
    if (cartStorage) {
      addPatient(JSON.parse(cartStorage));
    }

    setLoadingState();
    fetch(`/api/exerciseinfo?skip=${skip}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          console.log(data);
        } else {
          receiveExerciseInfoFromServer(data.data);
          unsetLoadingState();
        }
      });
  }, [paginationIndex]); // eslint-disable-line

  return (
    <ExerciseContext.Provider
      value={{
        state,
        receiveExerciseInfoFromServer,
        paginationIndex,
        setPaginationIndex,
        clearPatient,
        addPatient,
        removeExercise,
        setLoadingState,
        unsetLoadingState,
        receiveCategoryExerciseInfoFromServer,
        receiveSearchExerciseInfoFromServer,
        lowerQuantity,
        addQuantity,
        patientInfo,
        setPatientInfo,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};
