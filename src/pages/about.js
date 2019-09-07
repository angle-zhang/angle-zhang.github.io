import React from "react"

import Layout from "../components/layout"
import Loader from "../components/loader"
import RedirectButton from "../components/redirectButton"
import SEO from "../components/seo"

const SecondPage = () => (
  <>
  <Loader/>
  <Layout>
    <div class="about-container"> 
    <SEO title="Page two" />
    <div className="name-header"> 
      <h2>about</h2>
      <h1>ANGELA ZHANG</h1>
    </div> 
    <div> 
      <p class="sm-text-box" style={{paddingTop: `80px`}}>I'm a software engineer and third year Mathematics of Computation student at UCLA. Although the majority of my projects cover web dev, I also design for web and make art! I'm interested in working on projects that combine problem solving and creativity as well as have some visual component.</p>
      <div style={{marginTop: `50px`}}> 
      <RedirectButton url="https://www.github.com/angle-zhang">github</RedirectButton>    <RedirectButton url="https://www.linkedin.com/in/angela-zhang-a37442168/">linkedin</RedirectButton>     <RedirectButton url="/resume">resume</RedirectButton>
      </div> 
    </div>
    </div> 
  </Layout>
  </>
)

export default SecondPage;
