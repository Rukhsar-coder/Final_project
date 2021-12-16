import React from "react";
import { useState, useContext } from "react";
import { ExerciseContext } from "./ExerciseContext";
import { useHistory } from "react-router-dom";

const LoginControl = () => {
  const history = useHistory();
  // consume context
  const { setUser } = useContext(ExerciseContext);
  // verify the user is a user with fetch
  // fetch is initiated with the signin submit button
  const handleSignin = (ev) => {
    ev.preventDefault();
    fetch("/api/Single-user/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: "email",
        password: "password",
        type: "type",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setUser(data.data);
        console.log(data);
        history.push("/");
      })
      .catch((err) => history.push("/errorpage"));
  };

  return <div></div>;
};
export default LoginControl;
