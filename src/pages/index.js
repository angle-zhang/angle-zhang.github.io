import React from "react"

import Work from "./work"

import Layout from "../components/layout"
import Image from "../components/image"
import Landing from "../components/landing"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Landing></Landing> 
    <Work></Work> 
  </Layout>
)


export default IndexPage
