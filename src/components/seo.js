import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description, slug }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
          image
        }
      }
    }
  `);
  return (
    <Helmet
      htmlAttributes={{ lang: "it" }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <title>{title || site.siteMetadata.title}</title>
      <meta
        name="description"
        content={description || site.siteMetadata.description}
      />
      <meta name="image" content={site.siteMetadata.image} />
      <meta name="keywords" content={site.siteMetadata.keywords} />
      <meta property="og:image" content={site.siteMetadata.image} />
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta
        property="og:description"
        content={description || site.siteMetadata.description}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${site.siteMetadata.siteUrl}${slug}`} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta name="twitter:title" content={title || site.siteMetadata.title} />
      <meta name="twitter:image" content={site.siteMetadata.image} />
      <meta
        name="twitter:description"
        content={description || site.siteMetadata.description}
      />
      <meta name="twitter:card" content="summary" />
      <link rel="canonical" href={`${site.siteMetadata.siteUrl}${slug}`} />
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
};

export default Seo;
