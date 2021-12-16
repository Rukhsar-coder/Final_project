import React, { useContext } from "react";
import { ExerciseContext } from "../ExerciseContext";

//styling
import styled from "styled-components";

const ExerciseCart = ({ exercise, cart }) => {
  const { state, removeExercise } = useContext(ExerciseContext);

  let cartInfo = [];
  if (state.hasLoaded) {
    cart.forEach((elem) => {
      if (elem.product_id === exercise._id) {
        cartInfo.push(elem);
      }
    });
  }

  return (
    <Wrapper>
      <ImgWrapper>
        <StyledImg src={exercise.gifUrl} alt={exercise.name} />
      </ImgWrapper>
      <NameWrapper>
        <Name>{exercise.name}</Name>
      </NameWrapper>
      <RemoveBtn onClick={() => removeExercise(cartInfo)}>Remove</RemoveBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: flex-column;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  padding: 8px;
  width: 100%;
  &:hover {
    border-radius: 20px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;

const ImgWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  padding: 2px;
  margin-bottom: 20px;
`;

const StyledImg = styled.img`
  width: 35px;
  height: 35px;
  mix-blend-mode: multiply;
`;

const NameWrapper = styled.div`
  align-items: flex-start;
  width: 20%;
`;

const Name = styled.p`
  font-size: 10px;
  font-weight: bolder;
`;
const RemoveBtn = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  margin-right: 10px;
  margin-left: 10px;
  &:hover {
    color: #ffffff;
  }
`;

export default ExerciseCart;
