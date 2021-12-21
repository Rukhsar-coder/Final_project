import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { ImMinus } from "react-icons/im";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";

const AllWorkout = () => {
  const [status, setStatus] = useState("loading");
  const [allExercise, setAllExercise] = useState(null);
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(20);

  useEffect(() => {
    fetch(`/api/exerciseinfo/`)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setAllExercise(json.data);
        setStatus("idle");
      })
      .catch((err) => console.log(err));
  }, []);

  if (status === "loading") {
    return <Spinner size="10rem" />;
  }

  const increasePage = () => {
    if (stop < allExercise.length) {
      setStart(start + 10);
      setStop(stop + 10);
      setPage(page + 1);
    }
  };
  const decreasePage = () => {
    if (start > 0) {
      setStart(start - 10);
      setStop(stop - 10);
      setPage(page - 1);
    }
  };
  // stop=20
  return (
    <Div>
      {allExercise && (
        <Wrapper>
          {allExercise.slice(start, stop).map((exercise) => {
            console.log(exercise);
            return (
              <AllExercise
                to={`/exerciseinfo/${exercise.id}`}
                key={exercise._id}
                exercise={exercise}
              >
                <DataContainer>
                  <ExerciseName>
                    <Value>Exersice Name: </Value>
                    {exercise.name}
                  </ExerciseName>
                  {/* <ExerciseEquipment>{exercise.equipment}</ExerciseEquipment>
                  <ExerciseBodyPart>{exercise.bodyPart}</ExerciseBodyPart>
                  <Target>{exercise.target}</Target> */}
                </DataContainer>
                <ImgContainer>
                  <GifUrl src={exercise.gifUrl}></GifUrl>
                </ImgContainer>
              </AllExercise>
            );
          })}
          <ButtonContainer>
            <PageButton onClick={decreasePage}>
              {" "}
              <ImMinus />{" "}
            </PageButton>
            <PageNumber>{page}</PageNumber>
            <PageButton onClick={increasePage}>
              {" "}
              <BiPlusMedical />{" "}
            </PageButton>
          </ButtonContainer>
        </Wrapper>
      )}
    </Div>
  );
};
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  front-weight: 900;
  outline: none;
  background: white;
  font-size: 90px;
`;
const PageNumber = styled.span`
  padding: 20px;
  font-size: 25px;
  front-weight: 700;
`;
const Value = styled.div`
  font-size: 25px;
  front-weight: 1200;
`;
const PageButton = styled.button``;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "roboto", sans-serif;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  position: relative;
`;
const AllExercise = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  padding: 50px;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  margin-bottom: 30px;
  &:hover div {
    box-shadow: 0 0 5px #def5f5;
    background-color: #def5f5;
  }
`;
const DataContainer = styled.div``;
const ImgContainer = styled.div``;
const ExerciseName = styled.div`
  font-family: "Roboto", "Poppins", Helvetica, Arial, sans-serif;
`;
// const ExerciseBodyPart = styled.div`
//   text-align: center;
// `;
// const Target = styled.div`
//   text-align: center;
// `;
// const ExerciseEquipment = styled.div`
//   text-align: center;
// `;
const GifUrl = styled.img`
  width: 200px;
  margin: 40px;
  max-height: 200px;
`;

export default AllWorkout;
