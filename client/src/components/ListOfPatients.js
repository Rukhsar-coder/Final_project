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
    return <Spinner size="10rem" />;
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
      <ListOfName>List Of Patients</ListOfName>
      {listOfPatients && (
        <Wrapper>
          <TableHeading>
            <Value1> First Name</Value1>
            <Value2> Last Name</Value2>
            <Value3> Email</Value3>
          </TableHeading>
          {listOfPatients.slice(start, stop).map((patient) => {
            // console.log(patient);
            return (
              <AllPatient
                to={`/Patients-List/${patient.id}`}
                key={patient._id}
                patient={patient}
              >
                <DataContainer>
                  <PatientName>
                    <Input>{patient.firstName}</Input>
                  </PatientName>
                  <PatientName1>
                    <Input>{patient.lastName}</Input>
                  </PatientName1>
                  <PatientEmail>
                    <Input>{patient.email}</Input>
                  </PatientEmail>
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
const ListOfName = styled.h1`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
`;

const Input = styled.tr``;
const TableHeading = styled.th`
  padding-top: 10px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  width: 2100px;
`;
const Value1 = styled.span`
  border: 1px solid #04aa6d;
  padding-left: 80px;
  font-size: 25px;
  flex-direction: row
  justify-content: space-between;
`;
const Value2 = styled.span`
  border: 1px solid #04aa6d;
  padding-left: 250px;
  font-size: 25px;
  flex-direction: row
  justify-content: space-between;
`;
const Value3 = styled.span`
  border: 1px solid #04aa6d;
  padding-left: 320px;
  font-size: 25px;
  flex-direction: row
  justify-content: space-between;
`;
const Div = styled.div`
  padding-top: 20px;
  font-family: "roboto", sans-serif;
`;
const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  flex-direction: row;
`;
const AllPatient = styled(Link)`
  flex-direction: row;
`;
const DataContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 12px;
  text-align: left;
  color: black;
  display: flex;
  flex-direction: row;
  align-content: flex-end;

  align-items: flex-end;
  text-decoration: none;
`;
const PatientEmail = styled.div`
  padding-left: 240px;
  font-size: 25px;
  flex-direction: row
  color: #ff6347;
    width: 310px;
`;
const PatientName = styled.div`
  padding-left: 60px;
  font-size: 25px;
  flex-direction: row;
  width: 310px;
`;

const PatientName1 = styled.div`
  padding-left: 160px;
  font-size: 25px;
  flex-direction: row;
  width: 310px;
`;
export default ListOfPatients;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  front-weight: 900;
  outline: none;
  background: white;
  font-size: 90px;
  padding-top: 40px;
`;
const PageNumber = styled.span`
  padding: 20px;
  font-size: 20px;
  front-weight: 1200;
`;
const PageButton = styled.button``;
