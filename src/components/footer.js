import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "gatsby";
import { BsWhatsapp } from "react-icons/bs";

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
            <StyledLink to="/">Home</StyledLink>
            <span>|</span>
            <a
              target="_blank"
              href="https://www.privacypolicies.com/live/66f0dab1-6a6e-4c27-aab8-736f1d341386"
              rel="noreferrer"
            >
              Termini e Condizioni
            </a>
            <span>|</span>
            <a
              target="_blank"
              href="https://www.iubenda.com/privacy-policy/76488575"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </p>
        </Logo>
        <Contatti>
          <p>Contatti</p>
          <p>
            <MailIcon />{" "}
            <a href="mailto:emanuelepalummieri@yahoo.it">
              emanuelepalummieri@yahoo.it
            </a>
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
          <p>
            <WhatsAppIcon /> <a href="tel:+393931440205">393.1440205</a>
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
    flex-wrap: wrap;
  }
  span {
    margin: 0 2px;
  }
  a {
    color: inherit;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
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
const WhatsAppIcon = styled(BsWhatsapp)`
  margin-right: 6px;
`;
