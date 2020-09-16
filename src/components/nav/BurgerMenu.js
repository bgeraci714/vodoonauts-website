import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "react-burger-menu/lib/menus/slide"
import "./BurgerMenu.scss"

const BurgerMenu = ({ handleMenuStateChange }) => (
  <Menu
    left
    onStateChange={handleMenuStateChange}
    pageWrapId={"page-wrap"}
    outerContainerId={"outer-container"}
  >
    <Link id="home" className="menu-item" to="/">
      Home
    </Link>
    <Link id="about" className="menu-item" to="/about">
      About
    </Link>
    <Link id="colors" className="menu-item" to="/colors">
      Colors
    </Link>
  </Menu>
)

BurgerMenu.propTypes = {
  handleMenuStateChange: PropTypes.func,
}

export default BurgerMenu
