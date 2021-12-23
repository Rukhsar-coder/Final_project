import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//styling and icons
import styled from "styled-components";
// import { FaCheckCircle } from "react-icons/fa";
//date formatter
import { format } from "date-fns";
import Spinner from "./Spinner";

const ConfirmationPage = () => {
  // let signIn = window.sessionStorage.getItem("Sign-in");

  const [userId, setUserId] = useState(() => {
    const user = sessionStorage.getItem("Sign-in");
    return user !== null ? JSON.parse(user) : null;
  });
  console.log(userId);

  //
  const { email } = useParams();
  console.log(email);

  const [allExercise, setAllExercise] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/patient-exercise-cart/${email}`)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setAllExercise(json.data);
        setStatus("idle");
      })
      .catch((err) => console.log(err));
  }, [email]);

  if (status === "loading") {
    return <Spinner size="10rem" />;
  }
  return (
    <Div>
      {allExercise && (
        // {allExercise !== null && (
        <MainWrapper>
          {/* <Span>Exercise Summary:</Span>
          <FaCheckCircle size={40} /> */}
          <AssessmentReceived>
            Physician has created you Assessment Exercise List.
          </AssessmentReceived>
          <ConfirmationContainer>
            <ExerciseDetails>Patient Details: </ExerciseDetails>
            <ExerciseNumber>
              <Paragraph>
                <Span>Exercise Alocation Date:</Span>{" "}
                {format(new Date(), "EEE MMM dd yyy")}
              </Paragraph>
              <Paragraph>
                <Span>Patient First Name: </Span>
                <Value1>{allExercise.firstName}</Value1>
              </Paragraph>
              <Paragraph>
                <Span>Patient Last Name: </Span>
                <Value2>{allExercise.lastName}</Value2>
              </Paragraph>
              <Paragraph>
                <Span>Patient Email: </Span>
                <Value3>{allExercise.email}</Value3>
              </Paragraph>
              <Paragraph>
                <Span>physiotherapist Name: </Span>
                <Value4> {allExercise.physiotherapistName}</Value4>
              </Paragraph>
              <Paragraph>
                <Span>Note: </Span>
                <Value5> {allExercise.note}</Value5>
              </Paragraph>
              <Paragraph>
                <Span>URL: </Span>
                <Value6>{allExercise.url}</Value6>
              </Paragraph>
            </ExerciseNumber>
          </ConfirmationContainer>
          <Span>Exercise Summary:</Span>{" "}
          {allExercise?.patientExercise.map((exercise) => {
            return (
              <AllExercise
                to={`/exerciseinfo/${exercise.id}`}
                key={exercise._id}
                exercise={exercise}
              >
                <DataContainer>
                  <ExerciseName>
                    <Span1>Exersice Name: </Span1>
                    <Value1>{exercise.name} </Value1>
                  </ExerciseName>
                  <ExerciseEquipment>
                    <Span1>Exersice Equipment: </Span1>
                    <Value1> {exercise.equipment} </Value1>
                  </ExerciseEquipment>
                  <ExerciseBodyPart>
                    <Span1>Exersice BodyPart: </Span1>
                    <Value1>{exercise.bodyPart} </Value1>
                  </ExerciseBodyPart>
                  <Target>
                    <Span1> Muscle Target: </Span1>
                    <Value1> {exercise.target} </Value1>
                  </Target>
                </DataContainer>
                <ImgContainer>
                  <GifUrl src={exercise.gifUrl}></GifUrl>
                </ImgContainer>
              </AllExercise>
            );
          })}
        </MainWrapper>
      )}
      {allExercise === null && (
        <Constainer>
          {" "}
          You have not recived any assesment form Your Physio yet.
        </Constainer>
      )}
    </Div>
  );
};
const Span1 = styled.span`
  font-weight: 600;
  text-align: left;
`;
const AllExercise = styled(Link)`
  display: flex;
  flex-direction: column;
  display: grid
  width: 450px;
  height: 400px;
  padding: 50px;
  font-size: 20px;
  // font-weight: 600;
  position: relative;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  margin-bottom: 30px;
  border-style: solid;
  border-width: 5px;
  &:hover div {
    box-shadow: 0 0 5px #def5f5;
    background-color: #def5f5;
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.05);
  }
`;
const Target = styled.div`
  text-align: center;
`;
const ExerciseBodyPart = styled.div`
  text-align: center;
`;
const ExerciseEquipment = styled.div`
  text-align: center;
`;
const GifUrl = styled.img`
  width: 200px;
  margin: 40px;
  max-height: 200px;
`;
const ImgContainer = styled.span`
  vertical-align: middle;
`;
const DataContainer = styled.div``;
const Constainer = styled.div``;
const ExerciseName = styled.div``;
const Value1 = styled.span`
  margin-left: 48px;
  font-family: var(--font-family);
`;
const Value2 = styled.span`
  margin-left: 48px;
  font-family: var(--font-family);
`;
const Value3 = styled.span`
  margin-left: 98px;
  font-family: var(--font-family);
`;
const Value4 = styled.span`
  margin-left: 20px;
  font-family: var(--font-family);
`;
const Value5 = styled.span`
  margin-left: 200px;
  font-family: var(--font-family);
`;
const Value6 = styled.span`
  margin-left: 200px;
  font-family: var(--font-family);
`;
const Div = styled.div`
  hight: 100vh;
  width: auto;
  top: 80px;
  margin-left: 80px;

  display: flex;
`;
const MainWrapper = styled.div`
  height: 700px;
  color: #111111;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  font-family: var(--font-family);
  // background: rgb(34, 193, 195);
  // background: linear-gradient(
  //   0deg,
  //   rgba(34, 193, 195, 1) 34%,
  //   rgba(45, 112, 253, 1) 100%
  // );
  // flex-direction: column;
`;
const ConfirmationContainer = styled.div`
  width: 900px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  padding-left: 20px;
  margin-left: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const AssessmentReceived = styled.h1`
  color: #111111;
  margin-top: 30px;
  font-family: var(--font-family);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const ExerciseDetails = styled.h2`
  padding: 20px 0px;
`;

const ExerciseNumber = styled.div`
  font-size: 20px;
`;

const Paragraph = styled.p`
  padding: 5px 0px;
  font-size: 25px;
`;
// const ExerciseSummary = styled.h2`
//   padding: 20px 0px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin-top: 30px;
//   position: relative;

// flex-direction: column;
// `;

const Span = styled.span`
  font-weight: 700;
  font-size: 25px;
`;
export default ConfirmationPage;
