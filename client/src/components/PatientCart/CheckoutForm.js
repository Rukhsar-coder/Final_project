import React, { useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ExerciseContext } from "../ExerciseContext";
import { useHistory } from "react-router-dom";

//children
import ExerciseCart from "./ExerciseCart";

//styling
import styled from "styled-components";

const CheckOutForm = () => {
  let history = useHistory();
  const { state, patientInfo, setPatientInfo, clearPatient } =
    useContext(ExerciseContext);

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      setPatientInfo({
        ...patientInfo,
        firstName: user.given_name,
        lastName: user.family_name,
        email: user.email,
      });
    }
  }, []); // eslint-disable-line

  const getInfo = (ev) => {
    setPatientInfo({ ...patientInfo, [ev.target.id]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    let checkOutInfo = { ...patientInfo, cart: state.cart };

    fetch("/api/add-new-patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(checkOutInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          return <h1>please fill the missing info</h1>;
        } else {
          window.localStorage.setItem(
            "checkOutInfo",
            JSON.stringify(checkOutInfo)
          );
          clearPatient();
          history.push(`/confirmation/${data.data}`);
        }
      });
  };

  return (
    <Wrapper>
      <SideBar>
        <ExerciseCart />
      </SideBar>
      <Title>Patient Info</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          First Name:
          <Input
            type="text"
            onChange={getInfo}
            id="firstName"
            value={patientInfo.firstName}
            placeholder="First Name"
            required
          ></Input>
        </Label>
        <Label>
          Last Name:
          <Input
            type="text"
            onChange={getInfo}
            id="lastName"
            value={patientInfo.lastName}
            placeholder="Last Name"
            required
          ></Input>
        </Label>
        <Label>
          Phone Number:
          <Input
            type="tel"
            value={patientInfo.phoneNum}
            id="phoneNum"
            onChange={getInfo}
            placeholder="Phone Number"
            required
          ></Input>
        </Label>
        <Label>
          email:
          <Input
            type="email"
            value={patientInfo.email}
            id="email"
            onChange={getInfo}
            placeholder="Last Name"
            required
          ></Input>
        </Label>
        <Label>
          Address:
          <Input
            type="text"
            value={patientInfo.address}
            id="address"
            onChange={getInfo}
            placeholder="Address"
            required
          ></Input>
        </Label>
        <Label>
          City:
          <Input
            type="text"
            value={patientInfo.city}
            id="city"
            onChange={getInfo}
            placeholder="City"
            required
          ></Input>
        </Label>
        <Label>
          Postal Code:
          <Input
            type="text"
            value={patientInfo.postalCode}
            id="postalCode"
            onChange={getInfo}
            placeholder="postal code"
            required
          ></Input>
        </Label>
        <Label>
          <Select
            onChange={getInfo}
            value={patientInfo.province}
            id="province"
            required
          >
            <option value disabled>
              Province
            </option>
            <option defaultValue="AB">Alberta</option>
            <option value="BC">British Colombia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="NU">Nunavut</option>
            <option value="ON">Ontario</option>
            <option value="PEI">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="YT">Yukon</option>
          </Select>
        </Label>
        <Submit type="submit">Submit</Submit>
      </Form>
    </Wrapper>
  );
};

export default CheckOutForm;

const SideBar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  z-index: 300;
  background-color: var(--dusty-rose);
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Select = styled.select`
  border: none;
  padding: 10px;
  border-radius: 5px;
`;
const Input = styled.input`
  margin-left: 10px;
  width: 190px;
  border: 0;
  height: 20px;
  padding: 10px;
  font-size: 15px;
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
  flex-direction: column;
  align-content: flex-end;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 600px;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background-size: cover;
`;

const Submit = styled.button`
  height: 50px;
  width: 200px;
  margin: 10px;
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
