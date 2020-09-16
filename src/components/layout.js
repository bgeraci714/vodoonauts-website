/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuStateChange = state => setIsMenuOpen(state.isOpen)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        headingColor={`#6D214F`}
        handleMenuStateChange={handleMenuStateChange}
      />
      <div
        style={{
          margin: `2 em auto 3 em`,
          right: 0, // necessary to maintain div size
          left: 0, // necessary to maintain div size
          maxWidth: "1200px",
          padding: `6rem 1.0875rem 1.45rem`,
          position: `${isMenuOpen ? "fixed" : "relative"}`,
          height: "100%",
        }}
      >
        <main>{children}</main>
        <footer>
          © {2020}, Built with{` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by Blake Geraci
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
