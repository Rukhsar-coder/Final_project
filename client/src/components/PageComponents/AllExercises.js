import React from "react";
import ExerciseGrid from "./ExerciseGrid";
import Spinner from "../Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { InitialFetch } from "../InfiniteScroll/InitialFetch";
import { loadMoreExercises } from "../InfiniteScroll/Function";
import styled from "styled-components";

const AllExercises = () => {
  const {
    page,
    setPage,
    displayExercises,
    setDisplayExercises,
    prevExercises,
    setPrevExercises,
  } = InitialFetch(`/api/exerciseinfo?page=0&limit=20`);

  //url to fetch, 'limit' is static currently
  const url = `/api/exerciseinfo?page=${page}&limit=20`;

  if (displayExercises.length > 0) {
    return (
      <Container>
        <InfiniteScroll
          dataLength={displayExercises.length}
          next={() => {
            loadMoreExercises(
              url,
              page,
              setPage,
              displayExercises,
              setDisplayExercises,
              setPrevExercises
            );
          }}
          hasMore={prevExercises.length < displayExercises.length}
          scrollThreshold={0.8}
          loader={<Spinner />}
          endMessage={<div>End of Page</div>}
        >
          <ExerciseGrid
            exercise={displayExercises}
            key={Math.floor(Math.random() * 14000000)}
          />
        </InfiniteScroll>
      </Container>
    );
  } else {
    return <Spinner />;
  }
};

const Container = styled.div``;
// const Container = styled.div``;
export default AllExercises();
