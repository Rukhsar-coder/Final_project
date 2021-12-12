import React, { useContext } from "react";
import { useParams } from "react-router";
import { ExerciseContext } from "./ExerciseContext";
import Spinner from "./Spinner";
import { useHistory } from "react-router";

//styling
import styled from "styled-components";

const CatalogRender = () => {
  const { state, paginationIndex, setPaginationIndex, addPatient } =
    useContext(ExerciseContext);
  const type = useParams().type;
  let history = useHistory();

  let exerciseArray = [];

  if (type === "category" && state.categoryExercise.length > 0) {
    exerciseArray = state.categoryExercise;
  } else if (type === "search" && state.searchExercise.length > 0) {
    exerciseArray = state.searchExercise;
  } else {
    exerciseArray = state.exercise;
  }

  const handleClick = (ev, exercise) => {
    ev.stopPropagation();
    addPatient([{ product_id: exercise._id, quantity: 1 }]);
  };

  const handlePatientDetail = (ev, exercise) => {
    ev.stopPropagation();
    history.push(`/exerciseinfo/${exercise._id}`);
  };

  //We add one to the pagination index, this will cause a fetch and re-render.
  const handlePaginationClick = () => {
    setPaginationIndex(paginationIndex + 1);
  };

  //Our loading spinner component runs until the async fetch in the item context is complete.
  if (!state.hasLoaded) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  } else {
    return (
      <>
        <Divider />
        <Wrapper>
          {exerciseArray.map((exercise) => {
            return (
              <ProductContainer
                key={exercise._id}
                onClick={(ev) => handlePatientDetail(ev, exercise)}
              >
                <Para>{exercise.name}</Para>
                <ProductImg alt="exercise img" src={exercise.gifUrl} />
                <Overlay>
                  <Button
                    onClick={(ev) => {
                      handleClick(ev, exercise);
                    }}
                  >
                    Add to cart
                  </Button>
                  )
                </Overlay>
              </ProductContainer>
            );
          })}
        </Wrapper>
        {!type && (
          <PaginationContainer>
            <PaginationButton onClick={handlePaginationClick}>
              Load More
            </PaginationButton>
          </PaginationContainer>
        )}
      </>
    );
  }
};

const Button = styled.div`
  z-index: 49;
  cursor: pointer;
  height: 20px;
  position: absolute;
  top: 360px;
  left: 150px;
  cursor: pointer;
  font-weight: 700;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding: 50px;
  z-index: 40;
  transition: 0.5s ease;
  background-color: rgb(211, 186, 177, 0);
  border-radius: 20px;
`;

const Para = styled.p`
  text-align: center;
  font-family: var(--font-family);
`;

const Divider = styled.div`
  background-color: var(--sage);
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  position: relative;
  font-family: var(--font-family);
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  padding: 50px;
  position: relative;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  margin-bottom: 30px;
  &:hover div {
    box-shadow: 0 0 5px #ddd;
    background-color: rgb(211, 186, 177, 0.5);
  }
`;
const ProductImg = styled.img`
  width: 200px;
  margin: 40px;
  max-height: 200px;
`;
const PaginationContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const PaginationButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  font-size: 20px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgba(121, 128, 138, 0.5);
    color: white;
  }
`;

export default CatalogRender;
