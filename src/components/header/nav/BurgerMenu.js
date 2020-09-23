import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faRocket,
  faGraduationCap,
  faNewspaper,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import Menu from "react-burger-menu/lib/menus/slide";
import "./BurgerMenu.scss";

const IconWrapper = styled.div`
  margin-right: 1rem;
  display: inline;
`;

/* 
  Choose Icons from the below
  https://fontawesome.com/icons?d=gallery&m=free
*/

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
    <Link id="news" className="menu-item" to="/news">
      <IconWrapper>
        <FontAwesomeIcon icon={faNewspaper} />
      </IconWrapper>
      News
    </Link>

    <Link id="alumni" className="menu-item" to="/alumni">
      <IconWrapper>
        <FontAwesomeIcon icon={faGraduationCap} />
      </IconWrapper>
      Alumni
    </Link>
    <Link id="contact" className="menu-item" to="/contact">
      <IconWrapper>
        <FontAwesomeIcon icon={faPaperPlane} />
      </IconWrapper>
      Contact Us
    </Link>
  </Menu>
);

BurgerMenu.propTypes = {
  handleMenuStateChange: PropTypes.func,
};

export default BurgerMenu;
