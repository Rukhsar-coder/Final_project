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
      <ExerciseName>{exercise.name}</ExerciseName>
      <ExerciseEquipment {...exercise.equipment} />
    </ExerciseWrapper>
  );
};

const ExerciseWrapper = styled.div``;
const ExerciseDetails = styled(Link)``;
const ExerciseEquipment = styled.div``;
const ExerciseName = styled.div``;

export default Exercise;
