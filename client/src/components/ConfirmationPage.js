import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
//styling and icons
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

//importing header and footer components
import Footer from "./Footer";

//date formatter
import { format } from "date-fns";

const ConfirmationPage = () => {
  const { id } = useParams();

  return (
    <>
      <Wrapper to="/confirmation">
        <FaCheckCircle size={40} />
        <AssessmentReceived>
          Doctor has created you Assessment Exercise List.
        </AssessmentReceived>
        <ConfirmationContainer>
          <ExerciseDetails>Exercise Details: </ExerciseDetails>
          <ExerciseNumber>
            <Paragraph>
              <Span>Exercise Number:</Span> {id}
            </Paragraph>
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
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled(Link)`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-bottom: 55px;
  font-family: var(--font-family);
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 34%,
    rgba(45, 112, 253, 1) 100%
  );
  flex-direction: column;
`;
const ConfirmationContainer = styled.div`
  width: 900px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  padding-left: 20px;
`;

const AssessmentReceived = styled.h1`
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
