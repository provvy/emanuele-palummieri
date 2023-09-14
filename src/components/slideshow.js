import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "./homeSlider";
import { GatsbyImage } from "gatsby-plugin-image";

const Slideshow = ({ data, activeButton }) => {
  const { edges } = data;
  const thumbRef = useRef([]);
  const listRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [activeButton]);

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.keyCode === 37) setActiveImage((activeImage) => activeImage - 1);
      else if (e.keyCode === 39)
        setActiveImage((activeImage) => activeImage + 1);
      return;
    };
    // const keyHandler = (e) => {
    //   switch (e.keyCode) {
    //     case 37:
    //       setActiveImage((activeImage) => activeImage - 1);
    //       break;
    //     case 39:
    //       setActiveImage((activeImage) => activeImage + 1);
    //       break;
    //     default:
    //       break;
    //   }
    // };
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  useEffect(() => {
    if (activeImage > edges.length - 1) {
      setActiveImage(edges.length - 1);
    } else if (activeImage < 0) {
      setActiveImage(0);
    }

    thumbRef.current[activeImage]?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [activeImage, edges.length]);

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
        <LeftArrow
          onClick={() => {
            setActiveImage((activeImage) => activeImage - 1);
          }}
        />
        <RightArrow
          onClick={() => {
            setActiveImage((activeImage) => activeImage + 1);
          }}
        />
      </Top>
      <ArrowContainer>
        <Bottom ref={(el) => (listRef.current = el)}>
          <List>
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
              onClick={() => (listRef.current.scrollLeft -= 300)}
            />
            <LittleRightArrow
              onClick={() => (listRef.current.scrollLeft += 300)}
            />
          </List>
        </Bottom>
      </ArrowContainer>
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
const ArrowContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 3em;
`;
const Bottom = styled.div`
  width: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const List = styled.div`
  width: max-content;
  height: 130px;
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
export const StyledGatsbyImage = styled(GatsbyImage)`
  height: 100%;
  > div {
    height: 100%;
    > img {
      height: 100%;
    }
  }
`;
const LittleLeftArrow = styled(LeftArrow)`
  background: #1e1c19;
`;
const LittleRightArrow = styled(RightArrow)`
  background: #1e1c19;
`;
