import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image/";
import { Link } from "gatsby";

const Card = (props) => {
  const { image, data } = props;
  return (
    <Container>
      <Image>
        <GatsbyImage image={image.src} alt={image.alt} />
        <HoverDiv>
          <StyledLink to={"/galleria"} state={{ filter: `${data.title}` }}>
            {data.title}
          </StyledLink>
        </HoverDiv>
      </Image>
      <Text>
        <h3>
          <StyledLink
            $title
            to={"/galleria"}
            state={{ filter: `${data.title}` }}
          >
            {data.title}
          </StyledLink>
        </h3>
        <p>{data.text}</p>
      </Text>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  font-family: "Crimson Pro", serif;
  flex: 1 200px;
  display: flex;
  flex-direction: column;
  margin: 0 10px 40px;
  align-items: center;
  @media screen and (max-width: 756px) {
    flex-basis: 680px;
  }
`;
const Image = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  :hover {
    > div:last-child {
      top: 0;
      visibility: visible;
    }
  }
`;
const HoverDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  opacity: 0.8;
  position: absolute;
  left: 0;
  top: 100%;
  transition: 0.5s;
  visibility: hidden;
`;
const StyledLink = styled(Link)`
  color: #e5e5e5;
  font-size: ${({ $title }) => ($title ? "inherit" : "26px")};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const Text = styled.div`
  h3 {
    padding: 1em 0 0.6em;
    font-size: 25px;
    font-weight: 500;
    color: #e5e5e5;
  }
  p {
    font-size: 17px;
    line-height: 1.4em;
    color: #a5a5a5;
  }
`;
