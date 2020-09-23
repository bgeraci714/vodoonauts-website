import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const bannerStyling = {
  position: "relative",
};

const ImageText = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: {
          eq: "images/zoomScreenshots/VoodoonautsUncannyClassPic.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div style={bannerStyling}>
      <Img fluid={data.image.childImageSharp.fluid} />
      <ImageText>Our inaugural class.</ImageText>
    </div>
  );
};

export default Image;
