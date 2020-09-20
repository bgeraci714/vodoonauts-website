import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import BurgerMenu from "./nav/BurgerMenu"
import "./header.scss"

const headerStyles = headingColor => ({
  display: "flex",
  background: `${headingColor}`,
  marginBottom: `1.45rem`,
  position: "fixed",
  zIndex: "10000",
  width: "100%",
  borderBottom: "2px solid rgba(109, 33, 79, 0.2)",
})

const Header = ({ siteTitle, headingColor, handleMenuStateChange }) => {
  return (
    <header style={headerStyles(headingColor)}>
      <BurgerMenu handleMenuStateChange={handleMenuStateChange} />
      <div className="heading-container">
        <h1 className="heading">
          <Link
            to="/"
            style={{
              // color: `white`,
              color: `#6D214F`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
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
