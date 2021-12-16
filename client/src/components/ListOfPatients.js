import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { BiPlusMedical } from "react-icons/bi";
import { ImMinus } from "react-icons/im";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const ListOfPatients = () => {
  const [status, setStatus] = useState("loading");
  const [listOfPatients, setListOfPatients] = useState(null);
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(20);

  useEffect(() => {
    fetch(`/api/get-all-patient/cart`)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        setListOfPatients(json.data);
        setStatus("idle");
      })
      .catch((err) => console.log(err));
  }, []);

  if (status === "loading") {
    return <Spinner />;
  }

  const increasePage = () => {
    if (stop < listOfPatients.length) {
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
    <Div>
      {listOfPatients && (
        <Wrapper>
          {listOfPatients.slice(start, stop).map((patient) => {
            // console.log(patient);
            return (
              <AllPatient
                to={`/Patients-List/${patient.id}`}
                key={patient._id}
                patient={patient}
              >
                <DataContainer>
                  <PatientName> {patient.firstName}</PatientName>
                  <PatientName> {patient.lastName}</PatientName>
                  <PatientEmail>{patient.email}</PatientEmail>
                </DataContainer>
              </AllPatient>
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
        </Wrapper>
      )}
    </Div>
  );
};
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
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  position: relative;
`;
const AllPatient = styled(Link)`
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
const PatientEmail = styled.div`
  font-family: "Roboto", "Poppins", Helvetica, Arial, sans-serif;
`;

const PatientName = styled.div`
  font-family: "Roboto", "Poppins", Helvetica, Arial, sans-serif;
`;
export default ListOfPatients;
