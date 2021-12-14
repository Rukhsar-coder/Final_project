import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ExerciseDeatilPage = () => {
  // const history = useHistory();
  const { id } = useParams();
  // console.log(id);
  //set Variable

  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    console.log(id);
    fetch(`/api/exerciseinfo/${id}`)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setSelectedExercise(json.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Div>
      {selectedExercise && (
        <Wrapper>
          Exercise Detail:
          <ExerciseName> {selectedExercise.name}</ExerciseName>
          <ExerciseEquipment>{selectedExercise.equipment}</ExerciseEquipment>
          <ExerciseBodyPart>{selectedExercise.bodyPart}</ExerciseBodyPart>
          <Target>{selectedExercise.target}</Target>
          <GifUrl src={selectedExercise.gifUrl}></GifUrl>
        </Wrapper>
      )}
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "roboto", sans-serif;
`;
const Wrapper = styled.div``;
// const ExerciseDescription = styled.div``;
const ExerciseName = styled.div``;
const ExerciseBodyPart = styled.div``;

const Target = styled.div``;
const ExerciseEquipment = styled.div``;
const GifUrl = styled.img``;

export default ExerciseDeatilPage;
