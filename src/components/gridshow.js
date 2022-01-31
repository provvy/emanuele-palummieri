import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledGatsbyImage } from "./slideshow";
import { LeftArrow, RightArrow } from "./homeSlider";
import { AiOutlineClose } from "react-icons/ai";

const Gridshow = ({ data }) => {
  const { edges } = data;
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const clickHandler = (idx) => {
    setIsOpen(true);
    setActiveImage(idx);
  };
  useEffect(() => {
    if (activeImage < 0) {
      setActiveImage(0);
    } else if (activeImage > edges.length - 1) {
      setActiveImage(edges.length - 1);
    }
  }, [activeImage, edges.length]);
  useEffect(() => {
    const keyHandler = (e) => {
      switch (e.keyCode) {
        case 37:
          setActiveImage((activeImage) => activeImage - 1);
          break;
        case 39:
          setActiveImage((activeImage) => activeImage + 1);
          break;
        default:
          break;
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", keyHandler);
    }
    return () => window.removeEventListener("keydown", keyHandler);
  }, [isOpen]);
  return (
    <Grid>
      {edges.map(({ node }, idx) => (
        <StyledDiv onClick={() => clickHandler(idx)} key={idx}>
          <StyledGatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            alt={node.base}
          />
        </StyledDiv>
      ))}
      {isOpen && (
        <FancyContainer>
          {edges.map(({ node }, idx) => (
            <FancyBox key={idx} $active={activeImage === idx}>
              <StyledGatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                alt={node.base}
              />
            </FancyBox>
          ))}
          <LeftArrow onClick={() => setActiveImage(activeImage - 1)} />
          <RightArrow onClick={() => setActiveImage(activeImage + 1)} />
          <CloseIcon onClick={() => setIsOpen(false)} />
        </FancyContainer>
      )}
    </Grid>
  );
};

export default Gridshow;
const Grid = styled.div`
  display: flex;
  max-width: 95%;
  width: 1400px;
  gap: 2em;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 0.5em;
`;
const StyledDiv = styled.div`
  height: 250px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  ::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 7px solid #dba63c;
    opacity: 0;
    transition: 0.3s;
  }
  :hover::after {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
  @media screen and (max-width: 430px) {
    height: 200px;
  }
`;
const FancyContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  display: grid;
  place-items: center;
`;
const FancyBox = styled.div`
  grid-area: 1/1;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.9);
  max-height: 95vh;
`;
const CloseIcon = styled(AiOutlineClose)`
  display: block;
  cursor: pointer;
  position: absolute;
  top: 1em;
  right: 1em;
  font-size: 34px;
  color: #e9e9e9;
  opacity: 0.6;
  transition: 0.3s;
  :hover {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
