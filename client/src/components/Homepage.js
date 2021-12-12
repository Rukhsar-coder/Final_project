import React from "react";
import styled from "styled-components";
import homePage from "./Images/homePage.jpg";

const HomePage = () => {
  return (
    <Div>
      <Wrapper>
        <Para1>PHYSIO REHAB</Para1>
        <Para2>
          <b>THE PLACE</b> to get the most effective Physio exercises,
          professional Acessment, educational information + structured
          rehabilitation programs for injuries, surgery, strengthening +
          mobility
        </Para2>
        <Para3>Structure + easy to follow up</Para3>
        <Para4>Detailed program layouts</Para4>
        <Para5>Extensive week-to-week instruction</Para5>
        <Para6>Exercise + Explained Detailed note from physiotherapist</Para6>
        <Para7>SIGN-UP FOR MORE DETAIS</Para7>
        <ButtonSignup>Sign up</ButtonSignup>
        <BackgroundImg src={homePage} alt="Background Image"></BackgroundImg>
      </Wrapper>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImg = styled.img`
  height: 100vh;
  width: 210vh;
  display: flex;
  margin-top: 0px;
`;
const Wrapper = styled.div`
  padding-top: 60px;
  justify-content: center;

  font-family: "roboto", sans-serif;
`;

const Para1 = styled.span`
  top: 125px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  background: A9A9A9;
  color: white;
`;
const Para2 = styled.span`
  top: 160px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  color: white;
`;
const Para3 = styled.span`
  top: 210px;
  font-family: "roboto", sans-serif;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  color: white;
`;
const Para4 = styled.span`
  top: 230px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  color: white;
`;
const Para5 = styled.span`
  top: 250px;
  position: absolute;
  padding: 80px;
  font-size: 20px;

  color: white;
`;
const Para6 = styled.span`
  top: 270px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  color: white;
`;
const Para7 = styled.span`
  top: 290px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  color: white;
`;
const ButtonSignup = styled.button`
  top: 450px;
  position: absolute;
  padding: 30px;
  font-size: 25px;
`;
const Para9 = styled.span``;
export default HomePage;
