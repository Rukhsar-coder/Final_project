import React from "react";
import styled from "styled-components";
import About from "./Images/About.jpg";

const AboutUS = () => {
  return (
    <Div>
      <Wrapper>
        <Parag1>IT'S TIME TO REHAB SMARTER</Parag1>
        <Para2>
          Physio Rehab is designed to give everyone online access to the highest
          quality,{" "}
        </Para2>
        <Para3>most effective and up-to-date clinical rehab programs,</Para3>
        <Para4>
          rehab and mobility exercises, injury prevention and rehabilitation
          education.
        </Para4>
        <Para5>
          We aim to be the leaders in online and clinical injury rehabilitation
          programming, extending our practice from the clinic to the world,
          helping to raise the standard of Physiotherapy industry
        </Para5>
        <BackgroundImg src={About} alt="Background Image"></BackgroundImg>
      </Wrapper>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  top: 85px;
  position: absolute;
`;

const Wrapper = styled.div`
  display: flex;
`;

const BackgroundImg = styled.img`
  height: 100vh;
  width: 210vh;
  display: flex;
  margin-top: 0px;
`;
const Parag1 = styled.span`
  top: 50px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  background: A9A9A9;
  color: #111111;
  font-weight: 900;
`;

const Para2 = styled.span`
  top: 90px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  background: A9A9A9;
  color: #111111;
`;
const Para3 = styled.span`
  top: 120px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  background: A9A9A9;
  color: #111111;
`;
const Para4 = styled.span`
  top: 140px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  background: A9A9A9;
  color: #111111;
`;
const Para5 = styled.span`
  top: 170px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  background: A9A9A9;
  color: #111111;
`;
export default AboutUS;
