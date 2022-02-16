import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Card from "./card";
import { BiChevronRight } from "react-icons/bi";

const Galleries = ({ data }) => {
  const {
    cardImages: { edges },
  } = data;
  const dataObj = [
    {
      title: "Natura",
      text: "Guardare la bellezza della natura è il primo passo per purificare la mente.",
      author: "A. Ray",
      image: edges[1],
    },
    {
      title: "Paesaggi",
      text: "Ogni paesaggio ha la sua storia: quella che leggiamo, quella che sogniamo, e quella che creiamo.",
      author: "M. Kennedy",
      image: edges[2],
    },
    {
      title: "Street",
      text: "Una città non è disegnata, semplicemente si fa da sola. Basta ascoltarla, perchè la città è il riflesso di tante storie.",
      author: "R. Piano",
      image: edges[0],
    },
  ];
  return (
    <Container>
      <Title>
        <h2>GALLERIE</h2>
      </Title>
      {console.log(dataObj[0].image.node)}
      <Cards>
        {edges.map(({ node }, idx) => (
          <Card
            key={idx}
            image={{
              src: dataObj[idx].image.node.childImageSharp.gatsbyImageData,
              alt: node.base,
            }}
            data={dataObj[idx]}
          />
        ))}
      </Cards>
      <LinkContainer>
        <StyledLink to="/galleria">Scopri tutte le foto</StyledLink>
        <span>
          <StyledArrow />
        </span>
      </LinkContainer>
    </Container>
  );
};

export default Galleries;

export const Container = styled.div`
  max-width: 95%;
  width: 1000px;
`;
export const Title = styled.div`
  padding: 3em 0;
  h2 {
    color: #e5e5e5;
    font-family: "source sans pro", sans-serif;
    font-size: 28px;
    letter-spacing: 6px;
    font-weight: 400;
    padding: 0 10px;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const LinkContainer = styled.div`
  padding: 0.5em 0 2.5em;
  display: flex;
  span {
    display: flex;
    align-items: flex-end;
    opacity: 0;
    transform: translateX(0px);
    transition: 0.5s;
  }
  a:hover {
    + span {
      opacity: 1;
      transform: translateX(5px);
    }
  }
`;
export const StyledLink = styled(Link)`
  font-size: 18px;
  color: #dba63c;
  cursor: pointer;
  text-decoration: none;
  padding-left: 10px;
  font-style: italic;
  :hover {
    text-decoration: underline;
  }
`;
export const StyledArrow = styled(BiChevronRight)`
  color: #dba63c;
  font-size: 18px;
`;
