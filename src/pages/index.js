import React from "react"

import { graphql } from "gatsby"
import Work from "../components/work"

import Layout from "../components/layout"
import Landing from "../components/landing"
import Loader from "../components/loader"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <>
  <Loader/>
  <Layout>
    <SEO title="Portfolio" />
    <Landing img={data.file.childImageSharp.fixed}></Landing> 
    <div id="work"> 
      <Work />
    </div>
  </Layout>
  </>
)


// must be in pages directory to be queried by graphql https://github.com/gatsbyjs/gatsby/issues/5102
export const query = graphql`
    query {
        file(relativePath: { eq: "landing.jpg" }) {
            childImageSharp {
              fixed(width: 600, height: 600){
                ...GatsbyImageSharpFixed
              }
            }
        }      
    }
`


export default IndexPage
