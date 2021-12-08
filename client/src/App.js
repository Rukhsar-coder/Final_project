import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { Switch } from "react-router";
import styled from "styled-components";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import SignIn from "./components/SignIn";
//https://v5.reactrouter.com/web/api/Switch
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </Main>
      </BrowserRouter>
    </>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
