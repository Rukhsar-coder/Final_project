// import React, { useState } from "react";
import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
  const classes = useStyles();
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

  return (
    // <form className={classes.root} onSubmit={handleSubmit}>
    <FormContainer className={classes.root} onSubmit={(e) => handleSignin(e)}>
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
      {/* <SelectOption>
        <option value="Patient">Patient</option>
        <option value="Physio">Physio</option>
      </SelectOption> */}
      <div>
        <Button type="reset " variant="contained">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </FormContainer>
  );
};

// const SelectOption = styled.div``;
// const Option = styled.Option``
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
    padding: "100px",
    background: "none",

    "& .MuiTextField-root": {
      padding: "35px",
      background: "none",
      width: "500px",
    },
    "& .MuiInputBase-input": {
      background: "#FDFEFE",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(4),
    },
  },
}));

export default SignUp;
