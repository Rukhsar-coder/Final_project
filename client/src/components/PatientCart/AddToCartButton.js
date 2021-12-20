import React, { useState } from "react";
import styled from "styled-components";
// import GrDocumentText from "react-icons/gr";

const AddToCartButton = ({ exercise, patientExercise, setPatientExercise }) => {
  const [exerciseInCart, setExerciseInCart] = useState(false);

  const addToCartHandler = (e) => {
    e.preventDefault();

    console.log(exercise);
    const exerciseArray = [...patientExercise];
    exerciseArray.push(exercise);
    setPatientExercise(exerciseArray);
  };

  return (
    <AddButton onClick={addToCartHandler}>
      {!exerciseInCart ? "Add To Document" : "In Document"}
      {/* <GrDocumentText /> */}
    </AddButton>
  );
};

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 12px 30px;
  background: #383838;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.05);
    background-color: var(--dusty-rose);
    // box-shadow: none;
    color: #616060;
  }
`;

export default AddToCartButton;
