import React from "react"
import "./testimonial.scss"

const Testimonial = ({ quote, speaker }) =>
  speaker ? (
    <blockquote>
      <span className={"quote"}>{quote}</span>
      <span>- {speaker}</span>
    </blockquote>
  ) : (
    <blockquote>
      <span className={"quote"}>{quote}</span>
    </blockquote>
  )

export default Testimonial
