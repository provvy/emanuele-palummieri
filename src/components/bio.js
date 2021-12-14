import React from "react";
import styled from "styled-components";
import { Container, Title } from "./galleries";
import { GatsbyImage } from "gatsby-plugin-image";

const Bio = ({ data }) => {
  const {
    bioImage: {
      edges: [{ node }],
    },
  } = data;
  return (
    <Container>
      <Title>
        <h2>BIO</h2>
      </Title>
      <Content>
        <Image>
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            alt={node.base}
          />
        </Image>
        <Text>
          <h3>Chi sono</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            metus ligula. Cras eu ornare quam. Cras sed accumsan nunc. Nullam
            auctor mattis venenatis. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Proin at ornare
            magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Quisque ac congue ante, quis vestibulum
            orci. Fusce interdum libero sem, sed placerat metus tempus eget.
            Cras non tortor quis purus eleifend porttitor non non tortor.
          </p>
        </Text>
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
  flex: 1 320px;
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
    font-size: 17px;
    line-height: 1.4em;
    color: #a5a5a5;
    @media screen and (max-width: 930px) {
      font-size: 16px;
    }
  }
`;
