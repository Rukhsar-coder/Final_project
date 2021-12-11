import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Images/Logo.png";
import PersonIcon from "@material-ui/icons/Person";

const Header = () => {
  return (
    <>
      <Wrapper>
        <LinksContainer>
          <NavContainer>
            <LogoStyledLink to="/">
              <BrandName src={Logo} alt="Logo"></BrandName>
            </LogoStyledLink>
            <LinkItem>
              <StyledLink to="/">HOME</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/about">ABOUT US</StyledLink>

              <StyledLink to="/">WOROUTS</StyledLink>

              <StyledLink to="/">TELEHEALTH</StyledLink>
              <SignInButton to="/signin">
                LOGIN <PersonIcon />
              </SignInButton>
            </LinkItem>
          </NavContainer>
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
  display: flex;
  // background: #f5f5f5;
  background: #00ffff;
  z-index: 9;
  // background-image: url("background.png");
`;
const LogoStyledLink = styled(Link)`
  background: #f0ffff;
  margin-left: 0px;
`;
const BrandName = styled.img`
  height: 90px;
  width: auto;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.05);
    background: #00ffff;
  }
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
  // background: #f5f5f5;
  background: #7fffd4;

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
  // justify-content: center;
  list-style: none;
  border-top: 1px solid #d1d1d1;
  background: #f5f5dc;
`;

const NavContainer = styled.div`
  display: flex;

  // background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffe4c4;
`;
const LinkItem = styled.div`
  background: #ffb6c1;
  display: flex;
`;

const StyledLink = styled(Link)`
  text-transform: capitalize;
  padding: 0 10px;
  margin: 0 5px;
  text-decoration: none;
  justify-content: center;
  color: #383838;
  opacity: 0.5;
  transition: 0.5s;

  justify-content: flex-end;
  float: left;
  // color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  background: #ffa07a;
`;
export default Header;
