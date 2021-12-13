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
              <StyledLink to="/about">ABOUT </StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/">WOROUTS</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/">TELEHEALTH</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink to="/Appointment">APPOINTMENT</StyledLink>
            </LinkItem>

            <NavBtn>
              <LinkItem>
                <StyledLink to="/signin">
                  LOGIN
                  <PersonIcon />
                </StyledLink>
              </LinkItem>

              <LinkItem>
                <SignUpButton to="/signup">SIGNUP</SignUpButton>
              </LinkItem>
            </NavBtn>
          </NavContainer>
        </LinksContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.header`
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  background: white;
  height: 85px;
  display: flex;
  justify-content: space-between;

  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
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
    // background: #00ffff;
  }
`;
const SignUpButton = styled(NavLink)`
  border-radius: 20px;
  background: #ccccff;
  padding: 7px 45px;

  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  // &:hover {
  //   transition: all 0.2s ease-in-out;
  //   background: #fff;
  //   color: #85C1E9;
  //   cursor: pointer;
  //   box-shadow: 0 0 10px #f4f4f4;
  //   transition: 300ms ease-in;
  //   transform: scale(1.15);
  // }
`;
const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  text-decoration: none;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LinksContainer = styled.span``;

const NavContainer = styled.div`
  display: flex;
  align-items: center;

  margin-right: -24px;
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;
const LinkItem = styled.div`
  color: #85c1e9;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Header;
