import React from "react";
import styled from "styled-components";
import SignUpImg from "./Images/SignUpImg.jpg";
import { useContext, useState } from "react";
// import Spinner from "./Spinner";
// import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ExerciseContext } from "./ExerciseContext";
import { Link } from "@material-ui/core";
import { UserContext } from "./UserContext";

const PhysioSignIn = () => {
  const history = useHistory();
  const { setUserId } = useContext(UserContext);
  // consume context
  const { setPhysio } = useContext(ExerciseContext);
  // const [status, setStatus] = useState("loading");

  const [email, setEmail] = useState("");
  const [physiotherapist, setPhysiotherapist] = useState(false);

  // const userToAdd = { user: _id };

  const handleSignin = (ev) => {
    ev.preventDefault();
    console.log(physiotherapist);
    fetch("/api/physio/addPhysio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        physiotherapist,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        window.sessionStorage.setItem(
          "Sign-in",
          JSON.stringify({ email, physiotherapist })
        );
        const user = { email, physiotherapist };
        setUserId(user);
        setPhysio(data.data);
        // setStatus("idle");
        history.push("/");
      })
      .catch((err) => history.push("/errorpage"));
  };

  // if (userId?.email === "") {
  return (
    <MainContainer>
      {/* <Spinner size="10rem" /> */}
      <Wrapper>
        <Title>Physio Rehab</Title>
        <Form onSubmit={(e) => handleSignin(e)}>
          <Label>
            Email
            <Input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Input>
          </Label>
          <Label>
            Password Name:
            <Input
              type="password"
              id="password"
              placeholder="passworde"
              // value={password}
              // onChange={(e) => setpassword(e.target.value)}
              required
            ></Input>
          </Label>
          <RadioButton>
            <Label>Select Type</Label>
            <Label htmlFor="type">
              Patient
              <Input
                type="radio"
                name="type"
                value={false}
                onChange={(e) => {
                  if (e.target.checked === true) {
                    console.log(e.target.checked);
                    setPhysiotherapist(false);
                  }
                }}
              />
            </Label>
            <Label htmlFor="type">
              Physiotherapist
              <Input
                type="radio"
                name="type"
                value={physiotherapist}
                onChange={(e) => {
                  if (e.target.checked === true) {
                    console.log(e.target.checked);
                    setPhysiotherapist(true);
                  }
                }}

                // required
              />
            </Label>
          </RadioButton>
          {/* <Image11 src={About} alt="Logo"></Image11> */}
          <ConfirmSubmit>
            <Submit type="submit">Submit</Submit>
          </ConfirmSubmit>
        </Form>
      </Wrapper>
    </MainContainer>
  );
};
//   return <Div to="/PhysioSignIn"></Div>;
// // };
// const Image11 = styled.img`
//   display: flex;
//   position: absolute;
//   height: 450px;
//   margin-left: -530px;
// `;
const RadioButton = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const ConfirmSubmit = styled.div``;
const MainContainer = styled.div`
  ont-family: "Roboto", "Poppins", Helvetica, Arial, sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  top: 85px;
  // position: absolute;
  background-size: cover;
  background-image: url(${SignUpImg});
`;
const Input = styled.input`
  margin-left: 10px;
  width: 190px;
  border: 0;
  height: 20px;
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
`;

const Label = styled.label`
  font-family: var(--font-family);
  padding: 10px;
  font-weight: bold;
`;

const Title = styled.h1`
  margin-top: -130px;
  text-align: center;
  padding: 20px 0px;
  font-family: var(--font-family);
  font-size: 40px;
`;

const Form = styled.form`
  display: flex;
  font-family: var(--font-family);
  font-size: 20px;
  flex-direction: column;
  align-content: flex-end;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 100px;
`;

const Wrapper = styled.div`
  min-height: 55vh;
  background-size: cover;
`;

const Submit = styled.button`
  height: 50px;
  width: 200px;
  margin: 10px;
  margin-right: 95px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: var(--cool-gray);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 400ms ease;
  cursor: pointer;
  &:hover {
    background-color: var(--dusty-rose);
    box-shadow: none;
    color: #616060;
  }
`;

export default PhysioSignIn;
