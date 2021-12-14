import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "./homeSlider";
import { GatsbyImage } from "gatsby-plugin-image";

const Slideshow = ({ data, activeButton }) => {
  const { edges } = data;
  const thumbRef = useRef([]);
  const listRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [margin, setMargin] = useState(0);
  const [widthSum, setWidthSum] = useState(0);
  useEffect(() => {
    setActiveImage(0);
  }, [activeButton]);
  useEffect(() => {
    if (activeImage > edges.length - 1) {
      setActiveImage(edges.length - 1);
    } else if (activeImage < 0) {
      setActiveImage(0);
    }
  }, [activeImage, edges.length]);
  useEffect(() => {
    const sum = thumbRef.current
      .slice(0, activeImage + 1)
      .reduce((a, c) => a + (c ? c.offsetWidth : 0), 0);
    setWidthSum(sum);
    if (widthSum > window.innerWidth) {
      const widthDifference = widthSum - document.body.clientWidth;
      setMargin(widthDifference);
    } else {
      setMargin(0);
    }
  }, [activeImage, widthSum]);
  useEffect(() => {
    if (listRef.current.offsetWidth > document.body.clientWidth) {
      if (margin > listRef.current.offsetWidth - document.body.clientWidth) {
        setMargin(listRef.current.offsetWidth - document.body.clientWidth);
      } else if (margin < 0) {
        setMargin(0);
      }
    } else {
      setMargin(0);
    }
  }, [margin]);
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
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);
  return (
    <Container>
      <Top>
        {edges.map(({ node }, idx) => (
          <StyledDiv $active={activeImage === idx} key={idx}>
            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              alt={node.base}
            />
          </StyledDiv>
        ))}
        <LeftArrow onClick={() => setActiveImage(activeImage - 1)} />
        <RightArrow onClick={() => setActiveImage(activeImage + 1)} />
      </Top>
      <Bottom>
        <List ref={(el) => (listRef.current = el)} marginLeft={margin}>
          {edges.map(({ node }, idx) => (
            <Thumbnail
              onClick={() => setActiveImage(idx)}
              $active={activeImage === idx}
              key={idx}
              ref={(el) => (thumbRef.current[idx] = el)}
            >
              <StyledGatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                alt={node.base}
              />
            </Thumbnail>
          ))}
          <LittleLeftArrow
            onClick={() => setMargin((margin) => margin - 300)}
          />
          <LittleRightArrow
            onClick={() => setMargin((margin) => margin + 300)}
          />
        </List>
      </Bottom>
    </Container>
  );
};

export default Slideshow;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Top = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
`;
const StyledDiv = styled.div`
  grid-area: 1/1;
  opacity: ${({ $active }) => ($active ? "1" : "0")};
  transition: opacity 0.5s;
`;
const Bottom = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 3em;
`;
const List = styled.div`
  width: max-content;
  height: 130px;
  margin-left: ${({ marginLeft }) => `-${marginLeft}px`};
  transition: margin-left 0.5s;
`;
const Thumbnail = styled.div`
  height: 100%;
  display: inline-block;
  position: relative;
  cursor: pointer;
  ::after {
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    background: ${({ $active }) => ($active ? "none" : "rgba(0,0,0,0.4)")};
    border: ${({ $active }) => $active && "7px solid #dba63c"};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: background 0.3s;
  }
  :hover::after {
    background: none;
  }
`;
const StyledGatsbyImage = styled(GatsbyImage)`
  height: 100%;
  > div {
    height: 100%;
  }
`;
const LittleLeftArrow = styled(LeftArrow)`
  background: #1e1c19;
`;
const LittleRightArrow = styled(RightArrow)`
  background: #1e1c19;
`;
