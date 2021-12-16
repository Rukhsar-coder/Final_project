import React, { useState } from "react";
import styled from "styled-components";
// import GrDocumentText from "react-icons/gr";

const AddToCartButton = ({ _id }) => {
  const [exerciseInCart, setExerciseInCart] = useState(false);

  const addToCartHandler = (event) => {
    event.preventDefault();
    const exerciseToAdd = { exercise: _id };

    fetch(`/api/cart/addExercise`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(exerciseToAdd),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          setExerciseInCart(true);
        }
        console.log(res);
        console.log(exerciseToAdd);
      });
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
