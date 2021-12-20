import React from "react";
import styled, { keyframes } from "styled-components";
import { ImSpinner9 } from "react-icons/im";

const Spinner = ({ size }) => {
  return <Loading size={size} />;
};

const spinKeyFrame = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Loading = styled(ImSpinner9)`
  animation-name: ${spinKeyFrame};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  width: ${(p) => p.size};
  height: ${(p) => p.size};

  display: grid;
  margin: auto;
  height: 100vh;
`;

export default Spinner;
