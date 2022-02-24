import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Header>
      <Logo>
        <h1>
          <StyledLink logo={"true"} to="/">
            Emanuele Palummieri <span>Photo</span>
          </StyledLink>
        </h1>
        {menu ? (
          <CloseIcon onClick={() => setMenu(!menu)} />
        ) : (
          <MenuIcon onClick={() => setMenu(!menu)} />
        )}
      </Logo>
      <Nav menu={menu}>
        <ul>
          <li>
            <StyledLink
              activeStyle={{
                fontWeight: "400",
                color: "#dba63c",
              }}
              to="/"
            >
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink
              activeStyle={{ fontWeight: "400", color: "#dba63c" }}
              to="/galleria"
            >
              Galleria
            </StyledLink>
          </li>
          {/* <li>
            <StyledLink
              activeStyle={{ fontWeight: "400", color: "#dba63c" }}
              to="/bio"
            >
              Bio
            </StyledLink>
          </li> */}
          <li>
            <StyledLink
              activeStyle={{ fontWeight: "400", color: "#dba63c" }}
              to="/contatti"
            >
              Contatti
            </StyledLink>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.5em 5em;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1e1c19;
  z-index: 1;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.26);
  @media screen and (max-width: 951px) {
    padding: 1.5em;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0.7;
  @media screen and (max-width: 951px) {
    justify-content: space-between;
    flex: 1;
  }
  h1 {
    font-size: 34px;
    color: #dba63c;
    font-family: "Cinzel", serif;
    font-weight: 400;
    letter-spacing: 0.05em;
    @media screen and (max-width: 951px) {
      font-size: 26px;
    }
    @media screen and (max-width: 445px) {
      font-size: 20px;
    }
    @media screen and (max-width: 362px) {
      font-size: 16px;
    }
  }
`;
const Nav = styled.nav`
  font-family: "source sans pro", sans-serif;
  font-weight: 300;
  font-size: 18px;
  flex: 0.3;
  @media screen and (max-width: 951px) {
    position: absolute;
    bottom: ${(props) => (!props.menu ? "100%" : "-162px")};
    opacity: ${(props) => (!props.menu ? "0" : "100%")};
    transition: bottom 0.5s, opacity 0.5s;
    left: 0;
    width: 100%;
    font-size: 16px;
    background-color: #1e1c19;
    z-index: -1;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 951px) {
      flex-direction: column;
    }
  }
  li {
    color: #e5e5e5;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 951px) {
      width: 100%;
      padding: 1em 1.5em;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
    }
  }
`;
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  :hover {
    ${(props) =>
      !props.logo &&
      css`
        text-decoration: underline;
        color: #dba63c;
        transition: all 0.25s;
      `};
  }
  span {
    font-size: 24px;
    @media screen and (max-width: 951px) {
      font-size: 18px;
    }
    @media screen and (max-width: 445px) {
      font-size: 14px;
    }
    @media screen and (max-width: 362px) {
      font-size: 11px;
    }
  }
`;
const MenuIcon = styled(AiOutlineMenu)`
  display: none;
  cursor: pointer;
  color: #e5e5e5;
  font-size: 23px;
  margin-left: 1em;
  @media screen and (max-width: 951px) {
    display: block;
  }
`;
export const CloseIcon = styled(AiOutlineClose)`
  display: none;
  cursor: pointer;
  color: #e5e5e5;
  font-size: 23px;
  margin-left: 1em;
  @media screen and (max-width: 951px) {
    display: block;
  }
`;
