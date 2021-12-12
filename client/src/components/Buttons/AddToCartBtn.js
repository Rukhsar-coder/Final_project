import React, { useContext } from "react";
import styled from "styled-components";
import { GrDocumentText } from "react-icons/gr";
import { AppContext } from "../AppContext";

const AddToCartBtn = ({ exercise }) => {
  //to store the list of exercises selected for patient
  const { setSelectedWorkout, selectedWorkout } = useContext(AppContext);

  const addToCart = () => {
    setSelectedWorkout((value) => {
      return [...value, { exercise: { ...exercise }, quantity: 1 }];
    });
    localStorage.setExercise(
      `exercise_${exercise._id}`,
      JSON.stringify({ exercise: exercise, quantity: exercise.quantity })
    );
  };
  const isAlreadyAdded = selectedWorkout.filter(
    (selectedWorkout) => selectedWorkout.exercise._id === exercise._id
  );

  return (
    <CartButton onClick={!isAlreadyAdded.length && addToCart}>
      <GrDocumentText />
    </CartButton>
  );
};

const CartButton = styled.button``;
export default AddToCartBtn;
