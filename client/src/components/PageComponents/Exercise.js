import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

const Exercise = ({ exercise }) => {
  return (
    <ExerciseWrapper>
      <ExerciseDetails to={`/exerciseinfo/${exercise._id}`}>
        Exercise Detail
      </ExerciseDetails>
      <ExerciseDescription {...exercise.description} />
      <ExerciseName>{exercise.name}</ExerciseName>
    </ExerciseWrapper>
  );
};

const ExerciseWrapper = styled.div``;
const ExerciseDetails = styled(Link)``;
const ExerciseDescription = styled.div``;
const ExerciseName = styled.div``;

export default Exercise;
