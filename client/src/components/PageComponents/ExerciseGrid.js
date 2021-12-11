import React from "react";
import Exercise from "./Exercise";
import styled from "styled-components";

const ExerciseGrid = ({ exercise }) => {
  return (
    <GridContainer>
      {exercise.map((exercise) => {
        return <Exercise exercise={exercise} />;
      })}
    </GridContainer>
  );
};

const GridContainer = styled.div``;
export default ExerciseGrid;
