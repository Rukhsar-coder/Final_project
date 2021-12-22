import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Images/Logo.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  // const [email, setEmail] = useState("");
  // const [physiotherapist, setPhysiotherapist] = useState(false);

  const [userId, setUserId] = useState(() => {
    const user = sessionStorage.getItem("Sign-in");
    console.log(typeof user);
    return user !== null ? JSON.parse(user) : null;
  });
  console.log(userId);
  // console.log(userId.physiotherapist);

  const handleLogout = () => {
    sessionStorage.removeItem("Sign-in");
    setUserId(null);
    history.push("/");
    console.log(userId);
  };

  // console.log(userId.physiotherapist);
  // if ((userId?.email === "", userId?.physiotherapist === false)) {
  return (
    <>
      <Wrapper>
        <LinksContainer>
          <NavContainer>
            <LogoStyledLink to="/">
              <BrandName src={Logo} alt="Logo"></BrandName>
            </LogoStyledLink>
            {userId?.physiotherapist === true ? (
              <>
                <LinkItem>
                  <StyledLink to="/">HOME</StyledLink>
                </LinkItem>
                <LinkItem>
                  <StyledLink to="/about">ABOUT </StyledLink>
                </LinkItem>
                <LinkItem>
                  <StyledLink to="/workout ">WORKOUTS</StyledLink>
                </LinkItem>
                <LinkItem>
                  <StyledLink to="/patientform">FORM</StyledLink>
                </LinkItem>
                <LinkItem>
                  <StyledLink to="/Patients-List">PATIENTS</StyledLink>
                </LinkItem>
                <LinkItem>
                  <StyledLink to="/confirmation">CONFIRMATION</StyledLink>
                </LinkItem>
                <LinkItem>
                  <StyledLink to="/Appointment">APPOINTMENT</StyledLink>
                </LinkItem>
                <NavBtn>
                  <LinkItem>
                    <SignUpButton to="/" onClick={handleLogout}>
                      LogOut
                    </SignUpButton>
                  </LinkItem>
                </NavBtn>
              </>
            ) : userId?.physiotherapist === false ? (
              <>
                <LinkItem>
                  <StyledLink to="/">HOME</StyledLink>
                </LinkItem>
                <LinkItem>
                  <StyledLink to="/about">ABOUT </StyledLink>
                </LinkItem>
                <LinkItem>
                  <StyledLink to="/workout ">WORKOUTS</StyledLink>
                </LinkItem>
                <LinkItem>
                  <StyledLink to="/Appointment">APPOINTMENT</StyledLink>
                </LinkItem>
                <LinkItem>
                  <StyledLink to="/confirmation">CONFIRMATION</StyledLink>
                </LinkItem>
                <NavBtn>
                  <LinkItem>
                    <SignUpButton to="/" onClick={handleLogout}>
                      LogOut
                    </SignUpButton>
                  </LinkItem>
                </NavBtn>
              </>
            ) : (
              userId === null && (
                <>
                  <LinkItem>
                    <StyledLink to="/">HOME</StyledLink>
                  </LinkItem>
                  <LinkItem>
                    <StyledLink to="/about">ABOUT </StyledLink>
                  </LinkItem>
                  <LinkItem>
                    <StyledLink to="/workout ">WORKOUTS</StyledLink>
                  </LinkItem>
                  <LinkItem>
                    <StyledLink to="/Appointment">APPOINTMENT</StyledLink>
                  </LinkItem>
                  <NavBtn>
                    <LinkItem>
                      <SignUpButton to="/signup">SIGNUP</SignUpButton>
                    </LinkItem>
                    <LinkItem>
                      <SignUpButton to="/PhysioSignIn">MEMBER</SignUpButton>
                    </LinkItem>
                  </NavBtn>
                </>
              )
            )}
          </NavContainer>
        </LinksContainer>
      </Wrapper>
    </>
  );
};
// };

const Wrapper = styled.header`
  background: white;
  height: 85px;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", "Poppins", Helvetica, Arial, sans-serif;
  padding: 0.4rem calc((100vw - 1000px) / 4);
  z-index: 12;
`;
// const SubLinkContainer = styled.span``;
const LogoStyledLink = styled(Link)`
  background: #f0ffff;
  margin-left: 0px;
`;
const BrandName = styled.img`
  height: 79px;
  width: auto;
  margin-left: -225px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.05);
  }
`;
// const SubLinkItem = styled.div`
//   display: flex;
//   align-items: center;
//   font-style: italic;
//   justify-content: center;
// `;
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
  font-size: 23px;
  color: gray;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.05);
  }
`;

const SignUpButton = styled(NavLink)`
  font-family: "Roboto", "Poppins", Helvetica, Arial, sans-serif;
  font-weight: 600;
  border-radius: 20px;
  padding: 15px 50px;
  color: gray;
  font-size: 23px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 30px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #85c1e9;
    cursor: pointer;
    box-shadow: 0 0 10px #f4f4f4;
    transition: 300ms ease-in;
    transform: scale(1.15);
  }
`;
// const PatientHeader = styled.div``;
export default Header;
