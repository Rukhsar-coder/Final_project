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
          <Title>Exercise Detail:</Title>
          <ExerciseName>
            <Value>Exercise Name:</Value> {selectedExercise.name}
          </ExerciseName>
          <ExerciseEquipment>
            <Value> Equipment:</Value> {selectedExercise.equipment}
          </ExerciseEquipment>
          <ExerciseBodyPart>
            <Value>BodyPart:</Value> {selectedExercise.bodyPart}
          </ExerciseBodyPart>
          <Target>
            <Value>Target Muscle:</Value> {selectedExercise.target}
          </Target>
          <GifUrl src={selectedExercise.gifUrl}></GifUrl>
        </Wrapper>
      )}
    </Div>
  );
};
const Value = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 45px;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  font-family: "roboto", sans-serif;
`;
const Title = styled.div`
  font-size: 35px;
  font-weight: 900;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
`;
// const ExerciseDescription = styled.div``;
const ExerciseName = styled.div`
  font-size: 20px;
  margin-top: -25px;
`;
const ExerciseBodyPart = styled.div`
  font-size: 20px;
  margin-top: -25px;
`;

const Target = styled.div`
  font-size: 20px;
  margin-top: -25px;
`;
const ExerciseEquipment = styled.div`
  font-size: 20px;
  margin-top: -25px;
`;
const GifUrl = styled.img``;

export default ExerciseDeatilPage;
