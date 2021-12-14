// import React, { useState } from "react";
import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import SignUpImg from "./Images/SignUp.jpg";
import { ExerciseContext } from "./ExerciseContext";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const SignUp = ({ handleClose }) => {
  const history = useHistory();

  // consume context
  const { setUser } = useContext(ExerciseContext);
  // verify the user is a user with fetch
  // fetch is initiated with the signin submit button
  const handleSignin = (ev) => {
    ev.preventDefault();
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: firstName }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.name);
        window.sessionStorage.setItem("name", `${data.data.name}`);
        setUser(data.data);
        history.push("/");
      })
      .catch((err) => history.push("/errorpage"));
  };

  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    handleClose();
  };
  return (
    // <form className={classes.root} onSubmit={handleSubmit}>
    <FormContainer
      className={classes.root}
      onSubmit={(handleSubmit, handleSignin)}
    >
      {/* <img src={SignUpImg} alt="Background "></img> */}
      {/* <div style="background-image: url('SignUpImg.jpg');"></div> */}

      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(84, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
`;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "none",

    "& .MuiTextField-root": {
      padding: "20px",
      background: "none",
      width: "300px",
    },
    "& .MuiInputBase-input": {
      background: "#FDFEFE",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

export default SignUp;
