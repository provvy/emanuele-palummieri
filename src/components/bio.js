import React from "react";
import styled from "styled-components";
import { Container, Title } from "./galleries";
import { GatsbyImage } from "gatsby-plugin-image";

const Bio = ({ data }) => {
  const {
    bioImage: {
      edges: [{ node: bioPic }, { node: contestPic }],
    },
  } = data;
  return (
    <Container>
      {console.log(contestPic)}
      <Title>
        <h2>BIO</h2>
      </Title>
      <Content>
        <Image>
          <GatsbyImage
            image={bioPic.childImageSharp.gatsbyImageData}
            alt={bioPic.base}
          />
        </Image>
        <Text>
          <h3>Chi sono</h3>
          <p>
            Emanuele Palummieri è nato nel 1980 a Manduria (Ta), dove tuttora
            vive e trascorre la propria quotidianità unitamente alla sua
            famiglia. L'arte della fotografia costituisce per Emanuele, che di
            professione fa l'acconciatore, lo strumento attraverso il quale
            esprimere il proprio amore per il creato in tutte le sue forme. È
            infatti tramite l'obiettivo della sua fidata reflex che riesce a
            coglierne l'essenza e, al contempo, trasmettere agli altri il
            percepito del suo mondo interiore. In questa prima fase di crescita
            artistica è l'attenta osservazione del paesaggio ad attirare
            maggiormente la sua attenzione; ogni occasione è buona per
            imbracciare la sua macchina e compiere un salto dimensionale, che
            gli permetta di estraniarsi dalla frenesia della vita mondana ed
            immergersi mente e corpo nell'assoluta contemplazione della natura.
          </p>
        </Text>
        <Contest>
          <GatsbyImage
            image={contestPic.childImageSharp.gatsbyImageData}
            alt={contestPic.base}
          />
          <p>
            <span>"Alle prime luci dell'alba"</span> - foto scattata subito dopo
            l'aurora in località fiume Borraco, sulla litoranea salentina, a
            Manduria (Ta). Questa foto, oltre ad essere un esempio tangibile dei
            momenti di contemplazione e di fuga del fotografo, cui si è fatto
            riferimento poc'anzi, gli è anche valsa la vittoria ad un noto
            concorso di fotografia amatoriale.
          </p>
        </Contest>
      </Content>
    </Container>
  );
};

export default Bio;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 5em;
  align-items: center;
  font-family: "Crimson Pro", serif;
`;
const Image = styled.div`
  flex: 1 360px;
  margin: 0 20px 24px 10px;
  @media screen and (max-width: 768px) {
    margin: 0 10px 24px;
  }
`;
const Text = styled(Image)`
  margin: 0 10px 24px 20px;
  @media screen and (max-width: 803px) {
    margin: 0 10px 24px;
  }
  h3 {
    padding: 0 0 0.6em;
    font-size: 25px;
    color: #e5e5e5;
    font-weight: 500;
  }
  p {
    font-size: 18px;
    line-height: 1.4em;
    color: #a5a5a5;
    @media screen and (max-width: 930px) {
      font-size: 16px;
    }
  }
`;
const Contest = styled.div`
  margin-top: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  p {
    margin-top: 24px;
    font-size: 18px;
    line-height: 1.4em;
    color: #a5a5a5;
    @media screen and (max-width: 930px) {
      font-size: 16px;
    }
  }
  span {
    color: #e5e5e5;
  }
`;
