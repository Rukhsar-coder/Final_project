import React from "react";
import styled from "styled-components";
import Image1 from "./Images/Image1.png";
import Call from "./Images/Call.png";
import Email from "./Images/Email.png";
import Online from "./Images/Online.png";
import SignUpImg from "./Images/SignUpImg.jpg";
import { Link } from "react-router-dom";
const BookAppointment = () => {
  return (
    <Div>
      <Wrapper>
        <Para1>IT'S TIME TO REHAB SMARTER</Para1>
        <BackgroundImg1
          src={Image1}
          alt="Appintment Background Image"
        ></BackgroundImg1>

        <BackgroundImg
          src={SignUpImg}
          alt="SignUpImg Background Image"
        ></BackgroundImg>
        <Para2></Para2>
        <CallImg1 src={Call} alt="Call Image"></CallImg1>
        <Para3> Office: 123-456-789</Para3>
        <Para2> 1-800-888-8888</Para2>
        <EmailImg1 src={Email} alt="Email Image"></EmailImg1>
        <Para4>reception@physiorehab.com.ca</Para4>
        <OnlineImg1 src={Online} alt="Email Image"></OnlineImg1>
        <BookButton to="/errorpage" style={{ textDecoration: "none" }}>
          Book online Now
        </BookButton>
      </Wrapper>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  font-family: "Roboto", "Poppins", Helvetica, Arial, sans-serif;

  justify-content: center;
  align-items: center;
  position: absolute;
`;
const Wrapper = styled.div``;
const BackgroundImg = styled.img`
    width: 10vh
    height: 10px;
    display: flex;
    
`;
const BackgroundImg1 = styled.img`
    width: 10vh
    height: 10px;
    margin-left: 1200px;    
    margin-top: 110px;
    display: flex;
  position: absolute;
    `;
const Para1 = styled.span`
  top: -20px;
  position: absolute;
  padding: 80px;
  margin-left: 620px;
  font-size: 35px;
  color: white;
  font-weight: 900;
  
  display: flex,
  flexDirection: column,
  justifyContent: center,
  alignItems: center,
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.05);
    // background: #00ffff;
  }
`;
const CallImg1 = styled.img`
  top: 120px;
  position: absolute;
  width: auto;
  height: 250px;
  display: row;
  padding: 50px;
`;
const EmailImg1 = styled.img`
  top: 310px;
  position: absolute;
  width: auto;
  height: 250px;
  display: row;
  padding: 50px;
`;
const OnlineImg1 = styled.img`
  top: 500px;
  position: absolute;
  width: auto;
  height: 250px;
  display: row;
  padding: 50px;
`;
const Para2 = styled.span`
  top: 170px;
  position: absolute;
  padding: 80px;
  font-size: 25px;
  color: white;

  padding: 10px;
  border-radius: 25px;
  margin-left: 450px;
  font-weight: 900;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.05);
    // background: #00ffff;
  }
`;
const Para3 = styled.span`
  top: 230px;
  position: absolute;
  display: row;

  padding: 10px;
  border-radius: 25px;
  margin-left: 430px;
  font-size: 25px;
  color: white;
  font-weight: 900;
  //   justify-content: center;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.05);
    // background: #00ffff;
  }
`;
const Para4 = styled.span`
  top: 400px;
  position: absolute;
  display: row;
  margin-left: 410px;
  font-size: 25px;
  color: white;
  font-weight: 900;
  padding: 20px;
  border-radius: 25px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.05);
    // background: #00ffff;
  }
`;
const BookButton = styled(Link)`
  top: 570px;
  position: absolute;
  display: row;
  border-radius: 25px;
  border: none;
  margin-left: 410px;
  font-size: 25px;
  color: white;
  font-weight: 900;
  padding: 25px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.05);
    // background: #00ffff;
  }
`;
export default BookAppointment;
