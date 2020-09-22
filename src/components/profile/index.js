import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import "./profile.scss"

// rgba(51, 51, 51, 0.1);

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`

const HorizontalLine = styled.hr`
  background-color: rgba(109, 33, 79, 0.1);
  border: 0;
  height: 1px;
  margin-bottom: 1.6em;
`

const Name = styled.h2`
  text-align: center;
  color: rgba(109, 33, 79, 0.5);
`

const ImgContainer = styled.div`
  max-width: 400px;
  min-width: 300px;
  margin: 0 1rem 1rem 1rem;
`

const Excerpt = styled.span`
  width: 100%;
  margin: auto;
`

const Profile = ({ name, avatar, excerpt }) => (
  <div id={name}>
    <Name>{name}</Name>
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
)

export default Profile
