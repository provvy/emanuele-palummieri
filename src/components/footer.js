import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <StyledFooter>
      <Top>
        <Logo>
          <h4>EMANUELE PALUMMIERI</h4>
        </Logo>
        <Contatti>
          <p>
            <MailIcon />
            info@gmail.com
          </p>
          <p>
            <FacebookIcon />
          </p>
        </Contatti>
      </Top>
      <Bottom>
        <p>
          Tutte le immagini e i testi sono di proprietà di Emanuele Palummieri{" "}
          <span>
            <CopyrightIcon />
            2021
          </span>
        </p>
      </Bottom>
    </StyledFooter>
  );
};

export default Footer;
const StyledFooter = styled.footer`
  background-color: #a5a5a5;
  padding: 5em 2em;
  color: #1e1c19;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    font-size: 26px;
    font-family: "Cinzel", serif;
    font-weight: 600;
    letter-spacing: 0.05em;
  }
`;
const Contatti = styled(Logo)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MailIcon = styled(IoMailOutline)``;
const FacebookIcon = styled(BsFacebook)``;
const CopyrightIcon = styled(MdOutlineCopyright)``;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
