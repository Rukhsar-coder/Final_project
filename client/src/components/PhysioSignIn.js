import React from "react";
import styled from "styled-components";

import { useContext, useState } from "react";
// import Spinner from "./Spinner";
// import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ExerciseContext } from "./ExerciseContext";

const PhysioSignIn = ({ _id }) => {
  const history = useHistory();

  // consume context
  const { setPhysio } = useContext(ExerciseContext);
  // const [status, setStatus] = useState("loading");

  const [email, setEmail] = useState("");
  const [physiotherapist, setPhysiotherapist] = useState(false);
  // const userToAdd = { user: _id };

  const handleSignin = (ev) => {
    ev.preventDefault();
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
        setPhysio(data.data);
        console.log(data);
        // setStatus("idle");
        history.push("/");
      })
      .catch((err) => history.push("/errorpage"));
  };

  // if (status === "loading") {
  //   return <Spinner  size="10rem"/>;
  // }

  // const handleChange = (ev) => {
  //   ev.preventDefault();
  //   // const { name, value } = ev.target;

  //   // setState({ [name]: value });
  // };
  return (
    <MainContainer>
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
                // required
              />
            </Label>
            <Label htmlFor="type">
              Physiotherapist
              <Input
                type="radio"
                name="type"
                value={true}
                onChange={(e) => setPhysiotherapist(e.target.value)}
                // required
              />
            </Label>
          </RadioButton>
          <ConfirmSubmit>
            <Submit type="submit">Log-In</Submit>
          </ConfirmSubmit>
        </Form>
      </Wrapper>
    </MainContainer>
  );
};
const RadioButton = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
`;
const ConfirmSubmit = styled.div``;
const MainContainer = styled.div``;
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
  margin-right: 800px;
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
