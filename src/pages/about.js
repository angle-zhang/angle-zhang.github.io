import React from "react"

import Layout from "../components/layout"
import RedirectButton from "../components/redirectButton"
import SEO from "../components/seo"
import Button from "../components/button"

const About = () => (

  <Layout load>
    <div class="about-container"> 
    <SEO title="About" />
    <div style={{paddingTop: '0'}} className="name-header"> 
      <h2>about</h2>
      <h1>ANGELA ZHANG</h1>
    </div> 
    <div> 
      <p class="sm-text-box about-text-box">Hello, I'm a <b>creative developer</b> and third year <b>Mathematics of Computation</b> student at UCLA who likes making cool things. Although the majority of my projects cover web development, I also have substantial experience with C++ programming, designing for web and making art. I'm currently exploring the field of computer graphics with a focus on web technologies (WebGL and Three.js). Please <a href="mailto:angelazhang1220@gmail.com" className="contact-link"><b> contact me</b></a> if you have any inquiries or opportunities. </p>
      <div class="button-container" style={{marginTop: `50px`}}> 
        <RedirectButton url="https://www.github.com/angle-zhang">github</RedirectButton> <RedirectButton url="https://www.linkedin.com/in/angela-zhang-a37442168/">linkedin</RedirectButton>     <Button url="/resume">resume</Button>
      </div> 
    </div>
    </div> 
  </Layout>
)

export default About;
