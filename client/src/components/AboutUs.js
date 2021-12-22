import React from "react";
import styled from "styled-components";
import About from "./Images/About.jpeg";

// import Footer from "./Footer";

const AboutUS = () => {
  return (
    <Div>
      <Wrapper>
        <UpperContainer>
          <Parag1>IT'S TIME TO REHAB SMARTER</Parag1>
          <Para2>
            Physio Rehab is designed to give everyone online access to the
            highest quality,{" "}
          </Para2>
          <Para3>most effective and up-to-date clinical rehab programs,</Para3>
          <Para4>
            rehab and mobility exercises, injury prevention and rehabilitation
            education.
          </Para4>
          <Para5>
            We aim to be the leaders in online and clinical injury
            rehabilitation programming, extending our practice from the clinic
            to the world, helping to raise the standard of Physiotherapy
            industry
          </Para5>
        </UpperContainer>
        <LowerContainer>
          <Para6>
            "Not doing your rehab and expecting to recover 100%, is like not
            doing exercise and expecting to keep fit"
          </Para6>
          <Para7>
            "The need for people to rehab their injuries is paramount. The
            longer someone stays weak after injury the longer it takes for that
            person to improve. It's essential that a rehab program is followed
            and is stuck to, week to week, to enable the most effective clinical
            outcome and results. We all know that most people struggle to do
            their exercises that they are prescribed to get optimal recovery.
            It's imperative that after injury or surgery that a rehab program is
            put in place, that is effective, tried and tested. It needs to be of
            high education quality that enables correct form, technique and
            clear instructions and is motivating. If a patient doesn't follow a
            program right through the strengthening and recovery regime can
            break down, and the patient fails at their rehab. It is perceived
            that the 'physio exercises didn't work' and people then tend to
            either get even weaker and become worse or re-injure themselves by
            jumping back into fitness and sport too early.
          </Para7>
          <Para8>
            Unfortunately a lot of people do not have access to effective rehab
            or it's not in a format that is easily accessible to them. Let's
            face it, the days of exercise drawn on bits of paper are gone, and
            the new age of video and media for rehab is here.
          </Para8>
          <Para9>
            We are was born out of this need for video content to help patients
            continue their rehab exercises at home and the gym, and to follow a
            set and clear program week to week to stay on track. We started with
            our clinic patients, trialling and testing every exercise and then
            built up the rehab programs that covered different bodies and types
            of injuries. Our real patients now feature in these videos and
            programs, helping us get quality exercises and rehab programming
            education out to the public and the world. I am passionate about
            injury rehab and education and endeavour to provide as much content
            to you as I possible can!""
          </Para9>
        </LowerContainer>
        <FooterStyled>{/* <Footer /> */}</FooterStyled>
      </Wrapper>
    </Div>
  );
};
const Div = styled.div`
  font-family: "Roboto", "Poppins", Helvetica, Arial, sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 55vh;
  top: 85px;
  // position: absolute;
  background-size: cover;
  background-image: url(${About});
`;

const Wrapper = styled.div`
  display: flex;
`;
const UpperContainer = styled.div`
  top: 90px;
`;
const LowerContainer = styled.div``;
const FooterStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  // position: absolute;
`;

const Parag1 = styled.span`
  top: 50px;
  position: absolute;
  padding: 80px;
  font-size: 45px;
  color: white;
  font-weight: 900;
  margin-left: -450px;
`;

const Para2 = styled.span`
  top: 235px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  color: white;
  margin-left: -1050px;
`;
const Para3 = styled.span`
  top: 270px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  color: white;
  margin-left: -1050px;
`;
const Para4 = styled.span`
  top: 310px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  color: white;

  margin-left: -1050px;
`;
const Para5 = styled.span`
  top: 350px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  color: white;
  margin-left: -1050px;
`;
const Para6 = styled.span`
  top: 530px;
  font-weight: 600;
  margin-left: -850px;
  font-size: 33px;
  position: absolute;
  color: white;
`;
const Para7 = styled.span`
  top: 640px;
  margin-left: -990px;
  font-size: 20px;
  position: absolute;
  // color: #9966ff;
`;
const Para8 = styled.span`
  top: 780px;
  margin-left: -990px;
  font-size: 20px;
  position: absolute;
  // color: #9966ff;
`;
const Para9 = styled.span`
  top: 840px;
  margin-left: -990px;
  font-size: 20px;
  position: absolute;
  // color: #9966ff;
`;
export default AboutUS;
