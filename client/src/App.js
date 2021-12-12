import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { Switch } from "react-router";
import styled from "styled-components";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import SignIn from "./components/SignIn";
import ExerciseDeatilPage from "./components/ExerciseDeatilPage";
import ErrorPage from "./components/ErrorPage";
import Appointment from "./components/Appintment";
import AllExercises from "./components/PageComponents/AllExercises";
import CheckOutForm from "./components/PatientCart/CheckoutForm";

import Globalstyles from "./components/Globalstyles";

//https://v5.reactrouter.com/web/api/Switch
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Globalstyles />
        <Header />
        <Main>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            {/* <Route path="/category/:type">
            <Category />
          </Route>
          <Route path="/search/:type">
            <Search />
          </Route>
        */}
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/exerciseinfo">
              <AllExercises />
            </Route>
            <Route exact path="/exerciseinfo/:id">
              <ExerciseDeatilPage />
            </Route>
            {/* <Route exact path="/patient-cart">
            <ShoppingCart/>
          </Route> */}

            <Route path="/signin">
              <SignIn />
            </Route>

            <Route exact path="/Appointment">
              <Appointment />
            </Route>
            <Route exact path="/checkout">
              <CheckOutForm />
            </Route>
            <Route path="/errorpage">
              <ErrorPage />
            </Route>
            {/* <Route path="/searcherror">
            <SearchError />
          </Route> */}
            {/* <Route path="/confirmation/:id">
            <ConfirmationPage />
          </Route> */}
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
