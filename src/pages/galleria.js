import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Title } from "../components/galleries";
import { MdSlideshow, MdGridView } from "react-icons/md";
import styled from "styled-components";
import Slideshow from "../components/slideshow";

const GalleriaPage = ({ data, location }) => {
  const buttons = ["Tutte", "Natura", "Paesaggi", "Urbano"];
  const views = ["Slide", "Grid"];
  const { state = {} } = location;
  const { filter } = state;
  const initialState = {
    edges: data["natura"].edges.concat(
      data["paesaggi"].edges,
      data["urbano"].edges
    ),
  };
  const [activeView, setActiveView] = useState(views[0]);
  const [activeButton, setActiveButton] = useState(
    filter ? filter : buttons[0]
  );
  const [activeData, setActiveData] = useState(initialState);
  useEffect(() => {
    if (activeButton === "Tutte") {
      const natura = data["natura"].edges;
      const paesaggi = data["paesaggi"].edges;
      const urbano = data["urbano"].edges;
      const allData = { edges: natura.concat(paesaggi, urbano) };
      setActiveData(allData);
    } else {
      setActiveData(data[activeButton.toLowerCase()]);
    }
  }, [activeButton, data]);
  return (
    <Layout>
      <Top>
        <FlexTitle as={Title}>
          <h2>GALLERIA</h2>
          <View>
            <SlideIcon
              active={activeView === "Slide"}
              onClick={() => setActiveView("Slide")}
            />
            <GridIcon
              active={activeView === "Grid"}
              onClick={() => setActiveView("Grid")}
            />
          </View>
        </FlexTitle>
        <Filters>
          <p>Filtra:</p>
          {buttons.map((button) => (
            <Button
              key={button}
              active={activeButton === button}
              onClick={() => setActiveButton(button)}
            >
              {button}
            </Button>
          ))}
        </Filters>
      </Top>
      <Bottom>
        {activeView === "Slide" && (
          <Slideshow activeButton={activeButton} data={activeData} />
        )}
      </Bottom>
    </Layout>
  );
};

export default GalleriaPage;
const Top = styled.div`
  width: 1000px;
  max-width: 95%;
`;
const FlexTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const View = styled.div`
  display: flex;
  align-items: center;
`;
const SlideIcon = styled(MdSlideshow)`
  font-size: 24px;
  color: ${({ active }) => (active ? "#dba63c" : "#e5e5e5")};
  cursor: pointer;
  margin: 0 5px;
`;
const GridIcon = styled(MdGridView)`
  font-size: 24px;
  color: ${({ active }) => (active ? "#dba63c" : "#e5e5e5")};
  cursor: pointer;
  margin: 0 5px;
`;
const Filters = styled.div`
  display: flex;
  font-family: "Crimson Pro", serif;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  p {
    color: #dba63c;
    padding: 5px 13px;
    font-size: 18px;
  }
  @media screen and (max-width: 450px) {
    p {
      font-size: 16px;
    }
  }
`;
const Button = styled.button`
  border: none;
  font-family: "source sans pro", sans-serif;
  font-size: 18px;
  font-weight: 500;
  border-radius: 3px;
  padding: 5px 13px;
  margin: 0 3px;
  cursor: pointer;
  background: ${({ active }) => (active ? "#dba63c" : "none")};
  color: ${({ active }) => (active ? "#1e1c19" : "#e5e5e5")};
  transition: 0.3s;
  :hover {
    background: #dba63c;
    color: #1e1c19;
  }
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
const Bottom = styled.div`
  width: 100%;
  padding: 3em 0;
`;

export const galleriaQuery = graphql`
  query {
    natura: allFile(filter: { relativeDirectory: { eq: "natura" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              height: 700
              placeholder: BLURRED
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
          base
        }
      }
    }
    paesaggi: allFile(filter: { relativeDirectory: { eq: "paesaggi" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              height: 700
              placeholder: BLURRED
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
          base
        }
      }
    }
    urbano: allFile(filter: { relativeDirectory: { eq: "urbano" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              height: 700
              placeholder: BLURRED
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
          base
        }
      }
    }
  }
`;
