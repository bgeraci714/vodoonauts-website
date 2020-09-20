import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
}

const textStyling = {
  position: "absolute",
  transform: "translate(-50%,-50%)",
  top: "70%",
  left: "50%",
  textAlign: "center",
  margin: "0",
  zIndex: "1",
  color: "white",
  width: "80%",
}

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "namanga.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={bannerStyling}>
      {/* <h2 style={textStyling}></h2> */}
      <span style={textStyling}>
        <h2>Welcome to our little corner of the galaxy! </h2>
        <p>
          Voodonauts is a grassroots Afrofuturist collective promoting
          connectivity & craft within the global Black SFF community.
        </p>
      </span>
      <Img fluid={data.image.childImageSharp.fluid} />
    </div>
  )
}

export default Image
