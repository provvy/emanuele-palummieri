import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import {
  Title,
  LinkContainer,
  StyledArrow,
  StyledLink,
} from "../components/galleries";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const Lavori = ({ data }) => {
  const {
    lavori: { edges },
  } = data;
  return (
    <Layout>
      <Seo
        slug={"/lavori"}
        title={"Lavori"}
        description={
          "La sezione lavori contiene alcuni esempi di fine art printing, foto su commissione e stampe personalizzate fatti da Emanuele Palummieri."
        }
      />
      <Top>
        <StyledTitle>
          <h2>LAVORI</h2>
        </StyledTitle>
        <LinkContainer>
          <StyledLink to="/contatti">
            Per info su stampe e commissioni non esitare a contattarmi!
          </StyledLink>
          <span>
            <StyledArrow />
          </span>
        </LinkContainer>
        <Text>
          A seguire alcuni esempi di lavori eseguiti su commissione. Potrai trovarne altri sulla mia pagina <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/emanuele.palummieri"
            >Facebook.</a>
        </Text>
      </Top>
      <Bottom>
        {edges.map(({ node }, index) => (
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            alt={node.base}
            key={index}
          />
        ))}
      </Bottom>
    </Layout>
  );
};

export default Lavori;
const Top = styled.div`
  width: 1000px;
  max-width: 95%;
`;
const StyledTitle = styled(Title)`
  padding: 3em 0 1.5em;
`;
const Text = styled.p`
  font-size: 18px;
  color: #e5e5e5;
  font-family: "Crimson Pro", serif;
  margin-top: .8em;
  margin-bottom: 3em;
  line-height: 2em;
  padding: 0 10px;
  font-weight: 300;
  text-align: justify;
    a {
    color: #dba63c;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: inherit;
    }
  }
`;
const Bottom = styled.div`
  width: 1000px;
  max-width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  padding: 0 0 3em;
  @media screen and (max-width: 600px) {
    gap: 1em;
  }
`;
export const lavoriQuery = graphql`
  query {
    lavori: allFile(filter: { relativeDirectory: { eq: "lavoriImages" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              height: 700
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER, fit: COVER }
            )
          }
          base
        }
      }
    }
  }
`;
