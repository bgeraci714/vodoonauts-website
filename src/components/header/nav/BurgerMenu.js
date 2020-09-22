import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faRocket,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons"

import Menu from "react-burger-menu/lib/menus/slide"
import "./BurgerMenu.scss"

const IconWrapper = styled.div`
  margin-right: 1rem;
  display: inline;
`

const BurgerMenu = ({ handleMenuStateChange }) => (
  <Menu
    left
    onStateChange={handleMenuStateChange}
    pageWrapId={"page-wrap"}
    outerContainerId={"outer-container"}
  >
    <Link id="home" className="menu-item" to="/">
      <IconWrapper>
        <FontAwesomeIcon icon={faHome} />
      </IconWrapper>
      Home
    </Link>
    <Link id="about" className="menu-item" to="/about">
      <IconWrapper>
        <FontAwesomeIcon icon={faRocket} />
      </IconWrapper>{" "}
      About
    </Link>
    <Link id="alumni" className="menu-item" to="/alumni">
      <IconWrapper>
        <FontAwesomeIcon icon={faGraduationCap} />
      </IconWrapper>
      Alumni
    </Link>
  </Menu>
)

BurgerMenu.propTypes = {
  handleMenuStateChange: PropTypes.func,
}

export default BurgerMenu
