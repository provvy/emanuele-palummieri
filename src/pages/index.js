import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import HomeSlider from "../components/homeSlider";
import Galleries from "../components/galleries";
import Bio from "../components/bio";
import Cookies from "../components/cookies";
import Seo from "../components/seo";

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo slug={"/"} title={"Home"} />
      <HomeSlider data={data} />
      <Galleries data={data} />
      <Bio data={data} />
      <Cookies />
    </Layout>
  );
};

export default IndexPage;

export const homeSliderQuery = graphql`
  query {
    homeSliderImages: allFile(
      filter: { relativeDirectory: { eq: "homeSliderImages" } }
    ) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
        }
      }
    }
    cardImages: allFile(filter: { relativeDirectory: { eq: "cardImages" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER, fit: COVER }
              width: 700
              aspectRatio: 0.75
            )
          }
          base
        }
      }
    }
    bioImage: allFile(filter: { relativeDirectory: { eq: "bioImage" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER, fit: COVER }
              width: 980
            )
          }
          base
        }
      }
    }
  }
`;
