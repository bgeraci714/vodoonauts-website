import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import NamangaBanner from "../components/NamangaBanner"
import SEO from "../components/seo"
import Testimonial from "../components/testimonial"

const testimonials = [
  {
    quote: `There aren’t enough spaces like this. It is super beautiful to see it. I think back to myself in the MFA, and even post-MFA, it would have been dope to be in a community like this and to know that you are not so alone.`,
    speaker: (
      <span>
        Nana Kwame Adjei-Brenyah, NYT Bestselling Author of <i>Friday Black</i>
      </span>
    ),
  },
  {
    quote: `Voodoonauts Summer Workshop is the MFA I deserve. This is what an MFA is supposed to look like. When institutions care about their students. If schools really really cared about teaching creative people to thrive and be creative. This [Voodoonauts] is what that looks like`,
    speaker: (
      <span>
        Lizz Del Mar Florival on the{" "}
        <a
          href="https://podcasts.apple.com/us/podcast/black-is-king/id1478524025?i=1000486950944?i=1000486950944"
          target="_blank"
        >
          {" "}
          Creatively Exposed podcast
        </a>
      </span>
    ),
  },
  {
    quote: `The inspiring beginning of a necessary new space.`,
    speaker: `Class of 2020`,
  },
  {
    quote: `Voodoonauts is a great example of what Afrofuturtists do best: create the future they want to see. Done over two days on Zoom, the instructors organized a concise, expansive, and informational conference for writers at the intersections of Blackness, science fiction, and fantasy. With participants scattered across Africa and North America, language makers shared artistic space regardless of genre, all connected by imagination, solidarity, and curiosity.`,
    speaker: `Class of 2020`,
  },
  {
    quote: `An exciting and informative program that allowed me to reimagine, rediscover, and reevaluate my world perception whilst honing my creativity and introducing me to phenomenal writers.`,
    speaker: `Class of 2020`,
  },
  {
    quote: `Voodoonaut's 2020 Summer Program brought together a diverse mix of Black writers. It was a warm and inviting space to learn and collaborate. I learned a lot!`,
    speaker: `Class of 2020`,
  },
  {
    quote: `I really enjoyed the conference. The chats were just as informative and supportive. To the presenters great and wonderful job.`,
    speaker: `Class of 2020`,
  },
  {
    quote: `Voodoonauts was an eye-opening and immersive experience. I learnt more in two days than I could have imagined.`,
    speaker: `Class of 2020`,
  },
  { quote: `Kickass program 💯💯💯`, speaker: `Class of 2020` },
  {
    quote: `This workshop has been a great experience that is sure to lead to many new works.`,
    speaker: `Class of 2020`,
  },
  {
    quote: `an opportunity to stretch your writing through techniques you may not have considered, and to places you had not previously dreamed imaginable`,
    speaker: `Class of 2020`,
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <NamangaBanner />
    </div>
    <br />
    <h2 style={{ color: ` #6d214f` }}> Testimonials </h2>
    {testimonials.map(q => (
      <Testimonial quote={q.quote} speaker={q.speaker} />
    ))}
  </Layout>
)

export default IndexPage
