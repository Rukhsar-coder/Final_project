import React, { useContext, useState, useEffect } from "react";
import { ExerciseContext } from "../ExerciseContext";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

//children
import ExerciseCart from "./ExerciseCart";

//styling
import styled from "styled-components";

const PatientCart = ({ checkOut }) => {
  let history = useHistory();

  const [exerciseCart, setExerciseCart] = useState([]);
  const { state, clearPatient } = useContext(ExerciseContext);
  const { cart } = state;

  useEffect(() => {
    fetch("/api/cart-exercise/", {
      method: "POST",
      body: JSON.stringify(cart),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setExerciseCart(data.data);
      });
  }, [cart]);

  const checkOutForm = () => {
    history.push("/checkout");
  };

  if (cart.length === 0) {
    return (
      <Wrapper>
        <Title>Exercise Summary</Title>
        <h1>Your do not have Exercise alocated.</h1>
      </Wrapper>
    );
  } else {
    return (
      <>
        <Title>Exercise Summary</Title>

        {exerciseCart.map((exercise) => {
          let cartInfo = [];
          if (state.hasLoaded) {
            cart.forEach((elem) => {
              if (elem.product_id === exercise._id) {
                cartInfo.push(elem);
              }
            });
          }

          return (
            <ExerciseCart key={exercise._id} exercise={exercise} cart={cart} />
          );
        })}
        {checkOut !== true ? (
          <div>
            <Button onClick={clearPatient}>Clear</Button>
            <Checkout onClick={() => checkOutForm()}>Check out</Checkout>
          </div>
        ) : (
          <div>
            <Home to="/">Contact You Physiotherapist</Home>
          </div>
        )}
      </>
    );
  }
};

export default PatientCart;

const Home = styled(NavLink)`
  text-decoration: none;
  color: #616060;
  font-weight: bold;
  font-size: 20px;
  font-family: var(--font-family);
  border-bottom: 2px solid black;
  padding-bottom: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  margin: 10px;
  font-size: 20px;
  border-radius: 10px;
  padding: 15px 10px;
  width: 150px;
  border: none;
  color: #616060;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 400ms ease;
  &:hover {
    background: lightGray;
    box-shadow: none;
  }
`;
const Checkout = styled(Button)`
  &:hover {
    background: var(--sage);
  }
`;

const Title = styled.h1`
  text-align: center;
  padding: 10px;
  color: #616060;
  font-family: var(--font-family);
  margin-top: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
