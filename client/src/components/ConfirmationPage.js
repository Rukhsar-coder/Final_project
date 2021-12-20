// import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
//styling and icons
import styled from "styled-components";
// import { FaCheckCircle } from "react-icons/fa";
//date formatter
import { format } from "date-fns";
// import Spinner from "./Spinner";

const ConfirmationPage = () => {
  const { email } = useParams();
  // const [allExercise, setAllExercise] = useState(null);
  // const [status, setStatus] = useState("loading");

  // useEffect(() => {
  //   fetch(`/api/get-all-Exercise/cart`)
  //     .then((resp) => resp.json())
  //     .then((json) => {
  //       console.log(json);
  //       setAllExercise(json.data);
  //       // setStatus("idle");
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // if (status === "loading") {
  //   return <Spinner  size="10rem"/>;
  // }
  return (
    <Div>
      {/* {allExercise && ( */}
      <Wrapper to="/confirmation">
        {/* {allExercise.map((exercise) => { */}
        {/* // console.log(exercise); return ( */}
        {/* <AllExercise to={`/confirmation}`} key={exercise.email}> */}
        {/* <FaCheckCircle size={40} /> */}
        <AssessmentReceived>
          Doctor has created you Assessment Exercise List.
        </AssessmentReceived>
        <ConfirmationContainer>
          <ExerciseDetails>Exercise Details: </ExerciseDetails>
          <ExerciseNumber>
            <Paragraph>
              <Span>Exercise Alocation Date:</Span>{" "}
              {format(new Date(), "EEE MMM dd yyy")}
            </Paragraph>
            <Paragraph>
              {/* <Span>Patient Name:</Span> {patientInfo.firstName} */}
            </Paragraph>
            <Paragraph>
              Please keep your Exercise number for reference. Please allow up to
              24 hours for us to process your Assessment into our database for
              your future accesss.
            </Paragraph>
          </ExerciseNumber>
          <ExerciseSummary>
            <Span>Exercise Summary:</Span>{" "}
          </ExerciseSummary>
        </ConfirmationContainer>
        {/* </AllExercise> */}
        {/* ); })} */}
      </Wrapper>
      {/* )} */}
    </Div>
  );
};
// const AllExercise = styled.div``;
const Div = styled.div`
  hight: 100vh;
  width: auto;
  top: 80px;
`;
const Wrapper = styled(Link)`
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 34%,
    rgba(45, 112, 253, 1) 100%
  );
`;
const ConfirmationContainer = styled.div``;

const AssessmentReceived = styled.h1``;

const ExerciseDetails = styled.h2`
  padding: 20px 0px;
`;

const ExerciseNumber = styled.div`
  border-bottom: 2px solid gray;
`;

const Paragraph = styled.p`
  padding: 5px 0px;
`;
const ExerciseSummary = styled.h2`
  padding: 20px 0px;
`;

const Span = styled.span`
  font-weight: 700;
`;
export default ConfirmationPage;
