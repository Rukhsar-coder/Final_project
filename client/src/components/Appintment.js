import React from "react";
import styled from "styled-components";
import Appointment from "./Images/Appintment.png";
import Call from "./Images/Call.png";
import Email from "./Images/Email.png";
import Online from "./Images/Online.png";

const BookAppointment = () => {
  return (
    <Div>
      <Wrapper>
        <Para1>IT'S TIME TO REHAB SMARTER</Para1>
        <BackgroundImg
          src={Appointment}
          alt="Appintment Background Image"
        ></BackgroundImg>
        <Para2>IT'S TIME TO REHAB SMARTER</Para2>
        <CallImg1 src={Call} alt="Call Image"></CallImg1>
        <Para3>123-456-789</Para3>
        <EmailImg1 src={Email} alt="Email Image"></EmailImg1>
        <Para4>reception@physiorehab.com.ca</Para4>
        <OnlineImg1 src={Online} alt="Email Image"></OnlineImg1>
        <BookButton>Book online Now</BookButton>
      </Wrapper>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //   background: #111111;
`;
const Wrapper = styled.div``;
const BackgroundImg = styled.img`
    width: 100vh
    height: 250px;
    display: flex;
`;
const Para1 = styled.span`
  top: 50px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  color: white;
  font-weight: 900;
`;
const Para2 = styled.span`
  top: 50px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  color: white;
  font-weight: 900;
`;
const CallImg1 = styled.img`
  width: auto;
  height: 150px;
  display: row;
  padding: 50px;
`;
const EmailImg1 = styled.img`
  width: auto;
  height: 150px;
  display: row;
  padding: 50px;
`;
const OnlineImg1 = styled.img`
  width: auto;
  height: 150px;
  display: row;
  padding: 50px;
`;
const Para3 = styled.span`
  display: row;
  //   front-weight: 900;
  //   front-size: 85px;
  //   justify-content: center;
`;
const Para4 = styled.span`
  display: row;
`;
const BookButton = styled.button`
  display: row;
`;
export default BookAppointment;
