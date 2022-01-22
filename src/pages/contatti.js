import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { Title } from "../components/galleries";
import { Link } from "gatsby";
import { BsWhatsapp } from "react-icons/bs";
import Seo from "../components/seo";

const ContattiPage = () => {
  return (
    <Layout>
      <Seo
        slug={"/contatti"}
        title={"Contatti"}
        description={
          "La sezione contatti è ricca di strumenti per raggiungere Emanuele Palummieri per eventuali richieste, commissioni e preventivi, quali Facebook, WhatsApp e la sua mail."
        }
      />
      <Top>
        <Title>
          <h2>CONTATTI</h2>
        </Title>
        <Text>
          Le foto presenti nella{" "}
          <StyledLink to="/galleria">galleria</StyledLink> possono essere
          riprodotte in stampe di altissima qualità ed incorniciate, divenendo
          oggetti di arredo e design dal gusto vivace e raffinato. Effettuo
          anche lavori su commissione, come servizi fotografici, stampe
          personalizzate e <em>fine art printing</em> (alcuni esempi potrai
          trovarli sulla mia pagina Facebook). Se hai domande, richieste o vuoi
          saperne di più su prezzi e servizi, non esitare a contattarmi
          attraverso uno dei canali indicati qui sotto. Effettuo anche
          spedizioni in Italia e all'estero!
        </Text>
        <Contacts>
          <Category>Email:</Category>
          <Description>
            <a href="mailto:info@gmail.com">info@gmail.com</a>
          </Description>
        </Contacts>
        <Contacts>
          <Category>Facebook:</Category>
          <Description>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/emanuele.palummieri"
            >
              Emanuele Palummieri
            </a>
          </Description>
        </Contacts>
        <Contacts>
          <Category>Telefono:</Category>
          <Description>
            <a href="tel:+393931440205">393.1440205</a>
          </Description>
        </Contacts>
        <WhatsApp>
          <p>Anche su Whatsapp:</p>
          <a href="https://wa.me/393931440205">
            <WhatsAppIcon />
          </a>
        </WhatsApp>
      </Top>
    </Layout>
  );
};

export default ContattiPage;
const Top = styled.div`
  width: 1000px;
  max-width: 95%;
`;
const Text = styled.p`
  font-size: 18px;
  color: #e5e5e5;
  font-family: "Crimson Pro", serif;
  margin-bottom: 3em;
  line-height: 2em;
  padding: 0 10px;
  font-weight: 300;
  text-align: justify;
`;
const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #dba63c;
  &:hover {
    color: #e5e5e5;
  }
`;
const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.5em;
  margin: 0 10px 4em;
  border-bottom: 1px solid #4e4a47;
  width: 100%;
  max-width: 100%;
  gap: 1.3em;
  font-family: "Crimson Pro", serif;
`;
const Category = styled.h3`
  color: #dba63c;
  font-size: 26px;
  font-weight: 400;
`;
const Description = styled.p`
  color: #e5e5e5;
  font-size: 20px;
  font-weight: 300;
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const WhatsApp = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 5em;
  p {
    color: #dba63c;
    font-size: 18px;
    font-family: "Crimson Pro", serif;
    margin-right: 1em;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #25b63d;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: #1e9e33;
    }
  }
`;
const WhatsAppIcon = styled(BsWhatsapp)`
  width: 60%;
  height: auto;
  path {
    fill: #fff;
  }
`;
