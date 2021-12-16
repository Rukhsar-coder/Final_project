import React from "react";
import styled from "styled-components";

import { useEffect, useState, useContext } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { ImMinus } from "react-icons/im";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { useHistory } from "react-router-dom";
import { ExerciseContext } from "../ExerciseContext";
const PatientForm = () => {
  const { _id } = useParams();

  const [status, setStatus] = useState("loading");
  const [allExercise, setAllExercise] = useState(null);
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(20);

  const history = useHistory();

  // consume context
  const { setUser } = useContext(ExerciseContext);
  // verify the user is a user with fetch
  // fetch is initiated with the signin submit button
  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch("/api/add-all-Exercise/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // firstName: firstName,
        // lastName: lastName,
        // email: email,
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
  //this useEffect provide us the list of exercise to add in document for patient
  useEffect(() => {
    fetch(`/api/exerciseinfo/`)
      .then((resp) => resp.json())
      .then((json) => {
        // console.log(json);
        setAllExercise(json.data);
        setStatus("idle");
      })
      .catch((err) => console.log(err));
  }, []);

  if (status === "loading") {
    return <Spinner />;
  }

  const increasePage = () => {
    if (stop < allExercise.length) {
      setStart(start + 10);
      setStop(stop + 10);
      setPage(page + 1);
    }
  };
  const decreasePage = () => {
    if (start > 0) {
      setStart(start - 10);
      setStop(stop - 10);
      setPage(page - 1);
    }
  };
  return (
    <MainContainer>
      <Wrapper>
        <Title>Patient Info</Title>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Label>
            First Name:
            <Input
              type="text"
              id="firstName"
              placeholder="First Name"
              required
            ></Input>
          </Label>
          <Label>
            Last Name:
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
            ></Input>
          </Label>
          <Label>
            Physio License Number:
            <Input
              type="Num"
              id="Num"
              placeholder="License Number"
              required
            ></Input>
          </Label>
          <Label>
            Physiotherapist Name:
            <Input
              type="text"
              id="Physiotherapist"
              placeholder="Assign by"
              required
            ></Input>
          </Label>
          <Label>
            email:
            <Input
              type="email"
              id="email"
              placeholder="Last Name"
              required
            ></Input>
          </Label>
          <Label>
            Note:
            <Input
              type="TextArea"
              id="TextArea"
              placeholder="TextArea"
              required
            ></Input>
          </Label>
          <Label>
            URL:
            <Input type="URL" id="URL" placeholder="URL"></Input>
          </Label>
          <ConfirmSubmit>
            <Submit type="submit">Submit</Submit>
          </ConfirmSubmit>
        </Form>
      </Wrapper>

      <Div>
        {allExercise && (
          <SecondWrapper>
            {allExercise.slice(start, stop).map((exercise) => {
              // console.log(exercise);
              return (
                <AllExercise
                  to={`/api/exerciseinfo/${_id}`}
                  key={exercise._id}
                  exercise={exercise}
                >
                  <DataContainer>
                    <ExerciseName> {exercise.name}</ExerciseName>
                    {/* <ExerciseEquipment>{exercise.equipment}</ExerciseEquipment>
                  <ExerciseBodyPart>{exercise.bodyPart}</ExerciseBodyPart>
                  <Target>{exercise.target}</Target> */}
                  </DataContainer>
                  <ImgContainer>
                    <GifUrl src={exercise.gifUrl}></GifUrl>
                  </ImgContainer>
                  <AddToCartButton _id={exercise._id} />
                </AllExercise>
              );
            })}
            <ButtonContainer>
              <PageButton onClick={decreasePage}>
                {" "}
                <ImMinus />{" "}
              </PageButton>
              <PageNumber>{page}</PageNumber>
              <PageButton onClick={increasePage}>
                {" "}
                <BiPlusMedical />{" "}
              </PageButton>
            </ButtonContainer>
          </SecondWrapper>
        )}
      </Div>
    </MainContainer>
  );
};
const ConfirmSubmit = styled.div``;
const MainContainer = styled.div`
  font-family: var(--font-family);
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  front-weight: 900;
  outline: none;
  background: white;
  font-size: 90px;
`;
const PageNumber = styled.span`
  padding: 20px;
  font-size: 25px;
  front-weight: 1200;
`;
const PageButton = styled.button``;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "roboto", sans-serif;
`;
const SecondWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  position: relative;
`;
const AllExercise = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  padding: 50px;
  font-size: 25px;
  font-weight: 600;
  position: relative;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  margin-bottom: 30px;
  &:hover div {
    box-shadow: 0 0 5px #def5f5;
    background-color: #def5f5;
  }
`;
const DataContainer = styled.div``;
const ImgContainer = styled.div``;
const ExerciseName = styled.div`
  font-family: "Roboto", "Poppins", Helvetica, Arial, sans-serif;
`;
// const ExerciseBodyPart = styled.div`
//   text-align: center;
// `;
// const Target = styled.div`
//   text-align: center;
// `;
// const ExerciseEquipment = styled.div`
//   text-align: center;
// `;
const GifUrl = styled.img`
  width: 200px;
  margin: 40px;
  max-height: 200px;
`;

export default PatientForm;
