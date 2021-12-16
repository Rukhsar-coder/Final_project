import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
// import { useContext } from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import ExerciseDeatilPage from "./components/ExerciseDeatilPage";
import ErrorPage from "./components/ErrorPage";
import Appointment from "./components/Appintment";
import CheckOutForm from "./components/PatientCart/CheckoutForm";
import Search from "./components/Search";
import PatientCart from "./components/PatientCart/PatientCart";
import ConfirmationPage from "./components/ConfirmationPage";
// import { ExerciseContext } from "./ExerciseContext";
import Globalstyles from "./components/Globalstyles";
import AllWorkout from "./components/Workout/AllWorkout";
import PatientForm from "./components/PatientCart/PatientForm";
import PhysioSignIn from "./components/PhysioSignIn";
import ListOfPatients from "./components/ListOfPatients";
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
            {/* <Route path="/category/:type"> //TODO: 
            <Category />
          </Route> */}
            <Route path="/search/:type">
              <Search />
            </Route>

            <Route path="/about">
              <AboutUs />
            </Route>

            <Route path="/patientform">
              <PatientForm />
            </Route>
            <Route exact path="/workout">
              <AllWorkout />
            </Route>
            <Route path="/form">
              <AboutUs />
            </Route>
            <Route exact path="/exerciseinfo/:id">
              <ExerciseDeatilPage />
            </Route>
            <Route exact path="/patient-cart">
              <PatientCart />
            </Route>

            <Route path="/PhysioSignIn">
              <PhysioSignIn />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/Patients-List">
              <ListOfPatients />
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
            <Route path="/searcherror">
              <Search />
            </Route>
            <Route path="/confirmation">
              <ConfirmationPage />
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
