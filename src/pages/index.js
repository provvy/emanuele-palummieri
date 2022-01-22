import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import HomeSlider from "../components/homeSlider";
import Galleries from "../components/galleries";
import Bio from "../components/bio";
import CookieConsent from "react-cookie-consent";
import Seo from "../components/seo";

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo slug={"/"} title={"Home"} />
      <HomeSlider data={data} />
      <Galleries data={data} />
      <Bio data={data} />
      <CookieConsent
        style={{
          background: "#1e1c19",
          fontFamily: "Source Sans Pro",
          fontSize: "18px",
          fontWeight: "400",
          padding: "15px",
        }}
        buttonStyle={{
          background: "#dba63c",
          color: "#1e1c19",
          fontFamily: "Source Sans Pro",
          fontSize: "16px",
          fontWeight: "600",
          borderRadius: "12px",
          padding: "10px 30px",
        }}
        contentStyle={{ flex: "1 0 200px" }}
        buttonText="Ho capito"
      >
        Questo sito potrebbe fare uso di cookies per migliorare l'esperienza
        d'uso.
      </CookieConsent>
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
              width: 700
              aspectRatio: 1.2
            )
          }
          base
        }
      }
    }
  }
`;
