import React from "react"

import Work from "../components/work"

import Layout from "../components/layout"
import Landing from "../components/landing"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout load>
    <SEO title="Portfolio" />
    <Landing></Landing> 
    <div id="work"> 
      <Work />
    </div>
  </Layout>
)

export default IndexPage
