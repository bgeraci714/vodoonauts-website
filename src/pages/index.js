import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import NamangaBanner from "../components/NamangaBanner"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      <NamangaBanner />
    </div>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <div style={{ color: `purple`, fontSize: `72px`, paddingBottom: `1rem` }}>
      Hello Gatsby!
    </div> */}
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
