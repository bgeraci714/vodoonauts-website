import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BurgerMenu from "./nav/BurgerMenu"

const headerStyles = headingColor => ({
  display: "grid",
  gridTemplateAreas: "logo nav",
  background: `${headingColor}`,
  marginBottom: `1.45rem`,
  position: "fixed",
  zIndex: "10000",
  width: "100%",
})

const Header = ({ siteTitle, headingColor, handleMenuStateChange }) => {
  return (
    <header style={headerStyles(headingColor)}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>

      <BurgerMenu handleMenuStateChange={handleMenuStateChange} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  headingcolor: PropTypes.string,
  handleMenuStateChange: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
