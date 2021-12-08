import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Wrapper>
        <LinksContainer>
          <LinkItem>
            <StyledLink to="/">Home</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink to="/about">About</StyledLink>
            <SignInButton to="/signin" />
          </LinkItem>
        </LinksContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.header`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "roboto", sans-serif;
  position: sticky;
  width: 100%;
  background: #f5f5f5;
  z-index: 9;
  // background-image: url("background.png");
`;
const SignInButton = styled(NavLink)`
  padding: 10px 20px;
  margin-left: 30px;
  font-weight: 1200;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  border: none;
  background: #f5f5f5;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.15);
  }
`;

const LinksContainer = styled.span`
  width: 100%;
  display: flex;
  padding: 10px 10vw;
  justify-content: center;
  list-style: none;
  border-top: 1px solid #d1d1d1;
`;
const LinkItem = styled.div``;

const StyledLink = styled(Link)`
  text-transform: capitalize;
  padding: 0 10px;
  margin: 0 5px;
  text-decoration: none;
  color: #383838;
  opacity: 0.5;
  transition: 0.5s;
`;
export default Header;
