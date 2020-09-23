import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

import { Heading2, HorizontalLine } from "../common";

import "./profile.scss";

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  max-width: 400px;
  min-width: 300px;
  margin: 0 1rem 1rem 1rem;
`;

const Excerpt = styled.span`
  width: 100%;
  margin: auto;
`;

const Profile = ({ name, avatar, excerpt }) => (
  <div id={name}>
    <Heading2>{name}</Heading2>
    <HorizontalLine />
    <FlexContainer>
      {avatar && (
        <ImgContainer>
          <Img fluid={avatar} />
        </ImgContainer>
      )}
      <Excerpt>{excerpt}</Excerpt>
    </FlexContainer>
  </div>
);

export default Profile;
