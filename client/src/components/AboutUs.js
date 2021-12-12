import React from "react";
import styled from "styled-components";
import About from "./Images/About.jpeg";
//importing footer and header components
import Footer from "./Footer";
import Header from "./Header";

const AboutUS = () => {
  return (
    <Div>
      <Header />
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
        <Para6>
          "Not doing your rehab and expecting to recover 100%, is like not doing
          exercise and expecting to keep fit"
        </Para6>
        <Para7>
          "The need for people to rehab their injuries is paramount. The longer
          someone stays weak after injury the longer it takes for that person to
          improve. It's essential that a rehab program is followed and is stuck
          to, week to week, to enable the most effective clinical outcome and
          results. We all know that most people struggle to do their exercises
          that they are prescribed to get optimal recovery. It's imperative that
          after injury or surgery that a rehab program is put in place, that is
          effective, tried and tested. It needs to be of high education quality
          that enables correct form, technique and clear instructions and is
          motivating. If a patient doesn't follow a program right through the
          strengthening and recovery regime can break down, and the patient
          fails at their rehab. It is perceived that the 'physio exercises
          didn't work' and people then tend to either get even weaker and become
          worse or re-injure themselves by jumping back into fitness and sport
          too early.
        </Para7>
        <Para8>
          Unfortunately a lot of people do not have access to effective rehab or
          it's not in a format that is easily accessible to them. Let's face it,
          the days of exercise drawn on bits of paper are gone, and the new age
          of video and media for rehab is here.
        </Para8>
        <Para9>
          We are was born out of this need for video content to help patients
          continue their rehab exercises at home and the gym, and to follow a
          set and clear program week to week to stay on track. We started with
          our clinic patients, trialling and testing every exercise and then
          built up the rehab programs that covered different bodies and types of
          injuries. Our real patients now feature in these videos and programs,
          helping us get quality exercises and rehab programming education out
          to the public and the world. I am passionate about injury rehab and
          education and endeavour to provide as much content to you as I
          possible can!""
        </Para9>
      </Wrapper>
      <Footer />
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  top: 85px;
  position: absolute;
`;

const Wrapper = styled.div`
  display: flex;
`;

const BackgroundImg = styled.img`
  height: 50vh;
  width: 210vh;
  display: flex;
  margin-top: 0px;
`;
const Parag1 = styled.span`
  top: 50px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  color: white;
  font-weight: 900;
`;

const Para2 = styled.span`
  top: 90px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  color: white;
`;
const Para3 = styled.span`
  top: 120px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  color: white;
`;
const Para4 = styled.span`
  top: 140px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  color: white;
`;
const Para5 = styled.span`
  top: 170px;
  position: absolute;
  padding: 80px;
  font-size: 20px;
  color: white;
`;
const Para6 = styled.span`
  top: 380px;

  font-size: 25px;
  position: absolute;
  color: #111111;
  background: #7fffd4;
`;
const Para7 = styled.span`
  top: 425px;

  font-size: 15px;
  position: absolute;
  color: #111111;
`;
const Para8 = styled.span`
  top: 510px;

  font-size: 15px;
  position: absolute;
  color: #111111;
`;
const Para9 = styled.span`
  top: 540px;

  font-size: 15px;
  position: absolute;
  color: #111111;
`;
export default AboutUS;
