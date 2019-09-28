import React from "react"

import Layout from "../components/layout"
import RedirectButton from "../components/redirectButton"
import SEO from "../components/seo"
import Button from "../components/button"

const About = () => (

  <Layout load>
    <div class="about-container"> 
    <SEO title="Page two" />
    <div className="name-header"> 
      <h2>about</h2>
      <h1>ANGELA ZHANG</h1>
    </div> 
    <div> 
      <p class="sm-text-box about-text-box">I'm a software engineer and third year Mathematics of Computation student at UCLA. Although the majority of my projects cover web dev, I also design for web and make art! I'm interested in working on projects that combine problem solving and creativity as well as have some visual component.</p>
      <div style={{marginTop: `50px`}}> 
        <RedirectButton url="https://www.github.com/angle-zhang">github</RedirectButton> <RedirectButton url="https://www.linkedin.com/in/angela-zhang-a37442168/">linkedin</RedirectButton>     <Button url="/resume">resume</Button>
      </div> 
    </div>
    </div> 
  </Layout>
)

export default About;
