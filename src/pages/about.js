import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile"

const Section = styled.div`
  margin-bottom: 4rem;
`

const Heading = styled.h1`
  color: #6d214f;
  text-align: center;
`

const AboutPage = ({ data }) => {
  const profiles = [
    {
      name: "Shingai Njeri Kagunda",
      avatar: data?.shingai?.childImageSharp?.fluid,
      excerpt: (
        <span>
          <p>
            Shingai Njeri Kagunda is an Afrofuturist freedom dreamer, Swahili
            sea lover, Femme Q. Storyteller that hails from Nairobi, Kenya. She
            is currently pursuing a Literary Arts MFA at Brown University. She
            has written work that includes both poetry and prose, published or
            forthcoming in The Elephant, Omenana, and FANTASY magazine.
          </p>
          <p>
            Shingai's short story Holding Onto Water was longlisted for the
            Nommo Awards 2020 & her flash fiction was shortlisted for the
            Fractured Lit. Prize 2020. She has been selected as a candidate for
            the Clarion UCSD Class of 2020/2021. #clarionghostclass.
          </p>
          <p>
            She is also the co-founder of Voodoonauts: an afrofuturist workshop
            for black writers. Shingai despises exceptionalism as a politic, is
            a strong believer that magic exists in the shared space between
            memory and imagination, & has a personal vendetta against linear
            conceptualizations of time.
          </p>
        </span>
      ),
    },
    {
      name: "Yvette Lisa Ndlovu",
      avatar: data?.yvette?.childImageSharp?.fluid,
      excerpt: (
        <span>
          <p>
            Yvette Lisa Ndlovu is a Zimbabwean sarungano (storyteller). She is
            pursuing her MFA at the University of Massachusetts Amherst where
            she teaches in the Writing Program. She will be teaching at Clarion
            West Writers Workshop in the Fall.
          </p>
          <p>
            She earned her BA at Cornell University and was a finalist for a Tin
            House Young Adult Writer of Color Scholarship. She was the 2020
            fiction winner of Columbia Journal’s Womxn History Month Special
            Issue and is the co-founder of the Voodoonauts Workshop for Black
            SFF writers.
          </p>
          <p>
            Her work has been anthologized in the Voices of African Women
            Journal. She received the Cornell University George Harmon Coxe
            Award for Poetry selected by Sally Wen Mao and is a 2020 New York
            State Summer Writers Institute Scholarship recipient. Her work has
            appeared or is forthcoming in the Columbia Journal, FIYAH, the
            Huffington Post, the Jellyfish Review, and Kalahari Review.
          </p>
        </span>
      ),
    },
    {
      name: "LP Kindred",
      avatar: data?.lp?.childImageSharp?.fluid,
      excerpt: (
        <span>
          <p>
            LP Kindred is a Chicagoan-Angeleno who writes speculative fiction
            that features Black and/or Queer Lives. Kindred is proud instructor
            for Clarion West and the inaugural Voodoonauts Summer Workshop, as
            well as BTS for FiyahCon/Ignyte Awards.
          </p>
          <p>
            When Kindred is not writing and supporting writers, he can be found
            singing, eating good food, pretending to be fancy, watching bad TV,
            and lifting heavy objects. He is or will be an alum of
            Hurston-Wright, VONA, and Clarion. His fiction can be found in Fiyah
            Literary Magazine, LeVar Burton Reads, and Speculative City.
            #GhostClass
          </p>
        </span>
      ),
    },
    {
      name: "Hugh “H.D” Hunter",
      avatar: data?.hugh?.childImageSharp?.fluid,
      excerpt: (
        <span>
          <p>
            Hugh “H.D.” Hunter is a YA author and activist from Atlanta, GA. He
            is the self-published author of two books and the winner of the 2018
            Next Generation Indie Book Awards for Fiction and Multicultural
            Fiction.
          </p>
          <p>
            Hugh is also an alum of the inaugural YA Fiction Workshop at Tin
            House. Hugh travels the U.S. as a teaching artist designing writing
            workshops and other engagements for middle and high school students.
            Hugh is vegan and he loves memes. Follow him at hd_tsd.
          </p>
        </span>
      ),
    },
  ]
  return (
    <Layout>
      <SEO title="About" />
      <Section>
        <Heading>Mission</Heading>
        <p>
          Voodoonauts is a grassroots Afrofuturist collective for Black SFF
          writers. Founded by two MFA students, Yvette Lisa Ndlovu and Shingai
          Njeri Kagunda, and the cocoa-founders, Hugh “H.D.” Hunter and LP
          Kindred, in response to the under-representation and isolation of
          Black speculative fiction writers in the SFF landscape.
        </p>
        <p>
          We are a community space and generative writing workshop committed to
          cultivating the artistic and professional growth of Black SFF writers.
          Our founding principle is increasing accessibility.
        </p>
        <p>
          The inaugural workshop took place July 31st-August 1st 2020 with a
          cohort of 25 writers who ranged from published authors to emerging
          writers. The weekend included a panel and four workshops taught by
          Shingai Kagunda, Yvette Lisa Ndlovu, LP Kindred, and Hugh "H.D"
          Hunter, a reading and discussion with Nana Kwame Adjei Brenyah, an
          editor's talk, virtual happy hours, an Afrofuturist movie night and
          participant reading. We also received support from Neon Hemlock Press
          who provided books for participants.
        </p>
      </Section>
      <Section>
        <Heading>Founders</Heading>
        {profiles.map(p => (
          <Section>
            <Profile name={p.name} avatar={p.avatar} excerpt={p.excerpt} />
          </Section>
        ))}
      </Section>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    shingai: file(relativePath: { eq: "founders/Shingai_Headshot2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yvette: file(relativePath: { eq: "founders/Yvette_HeadshotWF.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lp: file(relativePath: { eq: "founders/LP_Headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hugh: file(relativePath: { eq: "founders/Hugh_Headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
