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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mattis velit, eget viverra ipsum. Vivamus sit amet felis a dolor tempor tincidunt. Vestibulum eu ipsum turpis. Nam pretium turpis.",
    },
    {
      title: "Paesaggi",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mattis velit, eget viverra ipsum. Vivamus sit amet felis a dolor tempor tincidunt. Vestibulum eu ipsum turpis. Nam pretium turpis.",
    },
    {
      title: "Urbano",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mattis velit, eget viverra ipsum. Vivamus sit amet felis a dolor tempor tincidunt. Vestibulum eu ipsum turpis. Nam pretium turpis.",
    },
  ];
  return (
    <Container>
      <Title>
        <h2>GALLERIE</h2>
      </Title>
      <Cards>
        {edges.map(({ node }, idx) => (
          <Card
            key={idx}
            image={{
              src: node.childImageSharp.gatsbyImageData,
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
const LinkContainer = styled.div`
  padding: 0.5em 0 2.5em;
  display: flex;
  span {
    display: flex;
    align-items: flex-end;
    opacity: 0;
    transform: translateX(0px);
    transition: 0.5s;
  }
  :hover {
    span {
      opacity: 1;
      transform: translateX(5px);
    }
  }
`;
const StyledLink = styled(Link)`
  font-size: 20px;
  color: #dba63c;
  cursor: pointer;
  text-decoration: none;
  padding-left: 10px;
  font-style: italic;
  :hover {
    text-decoration: underline;
  }
`;
const StyledArrow = styled(BiChevronRight)`
  color: #dba63c;
  font-size: 20px;
`;
