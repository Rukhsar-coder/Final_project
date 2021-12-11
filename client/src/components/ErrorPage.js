import React from "react";
import styled from "styled-components";
import { FaBomb } from "react-icons/fa";

const ErrorPage = ({ error }) => {
  return (
    <ErrorBoxContainer>
      <FaBomb size={50} />
      <ErrorMessage>{error}</ErrorMessage>
      <ErrorInstruction>
        Please try refreshing the page, or <a href="/">contact support</a> if
        the problem persists.
      </ErrorInstruction>
    </ErrorBoxContainer>
  );
};

//styled component
const ErrorBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 20px;
  text-align: center;
`;

const ErrorMessage = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 30px 0;
`;

const ErrorInstruction = styled.div``;

export default ErrorPage;
