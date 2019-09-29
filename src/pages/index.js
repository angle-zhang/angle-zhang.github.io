import React from "react"

import Work from "../components/work"

import Layout from "../components/layout"
import Landing from "../components/landing"
import SEO from "../components/seo"

class IndexPage extends React.Component { 
  componentDidMount() { 
    if (window.location.hash != null && window.location.hash != '') { 
      document.querySelector(window.location.hash).scrollIntoView();
    }
  }

  render() { 
    return (
      <Layout load>
        <SEO title="Portfolio" />
        <Landing></Landing> 
        <div id="work"> 
          <Work />
        </div>
      </Layout>
    )
  }
}

export default IndexPage;
