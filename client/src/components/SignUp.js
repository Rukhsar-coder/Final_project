// import React, { useState } from "react";
import React, { useState, useContext } from "react";
// import SignUpImg from "./Images/SignUp.jpg";
import { ExerciseContext } from "./ExerciseContext";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const history = useHistory();

  // consume context
  const { setUser } = useContext(ExerciseContext);
  // verify the user is a user with fetch
  // fetch is initiated with the signin submit button
  // const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (ev) => {
    ev.preventDefault();
    fetch("/api/add-new-patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.firstName);
        window.sessionStorage.setItem("email", `${data.data.email}`);
        setUser(data.data);
        console.log(data);
        history.push("/");
      })
      .catch((err) => history.push("/errorpage"));
  };

  const handleClear = (ev) => {
    ev.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
      <Form onSubmit={(e) => handleSignin(e)}>
        <Label>
          First Name:
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          ></Input>
        </Label>
        <Label>
          Last Name:
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          ></Input>
        </Label>
        <Label>
          Email:
          <Input
            type="Email"
            value={email}
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          ></Input>
        </Label>
        <Label>
          Password:
          <Input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          ></Input>
        </Label>
        <ConfirmSubmit>
          <Submit2 type="Clear" onClick={handleClear}>
            Clear
          </Submit2>
          <Submit1 type="submit">Submit</Submit1>
        </ConfirmSubmit>
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 50px;
`;
const Form = styled.form`
  display: flex;
  font-family: var(--font-family);
  font-size: 25px;
  flex-direction: column;
  align-content: flex-end;
  justify-content: center;
  align-items: flex-end;
  margin-right: 810px;

  margin-left: 610px;
  border: 1px;
  padding: 80px;
  box-shadow: 5px 10px 8px #888888;
`;

const Submit1 = styled.button`
  height: 50px;
  width: 200px;
  margin: 10px;
  margin-right: 15px;
  border-radius: 10px;
  font-size: 25px;
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
const Submit2 = styled.button`
  height: 50px;
  width: 200px;
  margin: 10px;
  margin-right: 5px;
  border-radius: 10px;
  font-size: 25px;
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

const ConfirmSubmit = styled.div`
  padding-top: 25px;
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

export default SignUp;
