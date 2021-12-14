import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "gatsby";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <StyledFooter>
      <Top>
        <Logo>
          <p>
            © {date}, Immagini e testi sono di proprietà di Emanuele Palummieri
          </p>
          <p>
            <StyledLink left to="/">
              Home
            </StyledLink>
            <span>|</span>
            <StyledLink to="/disclaimer">Disclaimer</StyledLink>
          </p>
        </Logo>
        <Contatti>
          <p>Contatti</p>
          <p>
            <MailIcon /> info@gmail.com
          </p>
          <p>
            <FacebookIcon />{" "}
            <a
              target="_blank"
              href="https://www.facebook.com/emanuele.palummieri"
              rel="noreferrer"
            >
              Emanuele Palummieri
            </a>
          </p>
        </Contatti>
      </Top>
    </StyledFooter>
  );
};

export default Footer;
const StyledFooter = styled.footer`
  background-color: #e5e5e5;
  color: #1e1c19;
  padding: 2.5em 0;
  font-family: "Crimson Pro", serif;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1000px;
  max-width: 95%;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  p {
    display: flex;
    align-items: center;
    font-weight: 500;
    margin: 0.2em 0;
    font-size: 18px;
  }
  p:last-child {
    font-weight: 400;
    font-size: 16px;
  }
  span {
    margin: 0 2px;
  }
`;
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const Contatti = styled(Logo)`
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    margin-top: 25px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    a {
      color: inherit;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
  p:first-child {
    font-size: 18px;
    font-weight: 500;
  }
`;
const MailIcon = styled(IoMailOutline)`
  margin-right: 6px;
`;
const FacebookIcon = styled(BsFacebook)`
  margin-right: 6px;
`;
