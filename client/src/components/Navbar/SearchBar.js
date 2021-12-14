import React from "react";
import { GrDocumentText } from "react-icons/gr";
import styled from "styled-components";
const SearchBar = ({ handleSearchClick }) => {
  return (
    <Button onClick={handleSearchClick}>
      <GrDocumentText color={"gray"} />
    </Button>
  );
};
const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: #fff;
  font-size: 25px;
  font-weight: 700;
`;
export default SearchBar;
