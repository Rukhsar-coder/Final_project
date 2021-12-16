import React from "react";
import styled from "styled-components";
import homePage from "./Images/homePage.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Div>
      <Wrapper>
        <Para1>PHYSIO REHAB</Para1>
        <Para2>
          <b>THE PLACE</b> to get the most effective Physio exercises,
          professional Acessment, educational information + structured
        </Para2>
        <Para22>
          rehabilitation programs for injuries, surgery, strengthening +
          mobility.
        </Para22>
        <Para3>
          <BsArrowRightShort />
          Structure + easy to follow up
        </Para3>
        <Para4>
          <BsArrowRightShort />
          Detailed program layouts
        </Para4>
        <Para5>
          <BsArrowRightShort />
          Extensive week-to-week instruction
        </Para5>
        <Para6>
          <BsArrowRightShort />
          Exercise + Explained Detailed note from physiotherapist
        </Para6>
        <Para7>SIGN-UP FOR MORE DETAIS</Para7>
        <SignupLink to="/signup">
          <ButtonSignup>Sign up</ButtonSignup>
        </SignupLink>

        <BackgroundImg src={homePage} alt="Background Image"></BackgroundImg>
      </Wrapper>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100vh;
  background-image: url(${homePage});
  // background-repeat: no-repeat;
`;
const SignupLink = styled(Link)``;

const BackgroundImg = styled.div`
top:50px
  height: 100vh;
  width: 410vh;
  display: flex;
  margin-top: 0px;
`;
const Wrapper = styled.div`
  padding-top: 60px;
  justify-content: center;
  text-align: center;
  margin-left: -1800px;
  font-family: "roboto", sans-serif;
  left: 100px;
  line-height: 30px;
`;

const Para1 = styled.span`
  top: 115px;
  position: absolute;
  padding: 80px;
  font-size: 45px;
  background: A9A9A9;
  font-weight: 600;
  color: white;
`;
const Para2 = styled.span`
  top: 180px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  color: white;

  line-height: 30px;
`;

const Para22 = styled.span`
  top: 220px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  color: white;

  line-height: 30px;
`;
const Para3 = styled.span`
  top: 300px;
  // font-family: "roboto", sans-serif;
  position: absolute;
  padding: 70px;
  font-size: 25px;
  color: white;

  line-height: 30px;
`;
const Para4 = styled.span`
  top: 350px;
  position: absolute;
  padding: 70px;
  font-size: 25px;
  color: white;
`;
const Para5 = styled.span`
  top: 400px;
  position: absolute;
  padding: 70px;
  font-size: 25px;

  color: white;
`;
const Para6 = styled.span`
  top: 450px;
  position: absolute;
  padding: 70px;
  font-size: 25px;
  color: white;
`;
const Para7 = styled.span`
  top: 520px;
  position: absolute;
  padding: 80px;
  font-size: 30px;
  color: white;
  font-weight: 600;
`;
const ButtonSignup = styled.button`
  top: 680px;
  position: absolute;
  padding: 15px 85px;
  font-size: 25px;
  border-radius: 35px;

  margin-left: 80px;
  border: none;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.05);
    // background: #94bbe9;
    background: rgb(63, 94, 251);
    background: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(70, 252, 216, 1) 100%
    );
  }
`;
// const Para9 = styled.span``;
export default HomePage;
