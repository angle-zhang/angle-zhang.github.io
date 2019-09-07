import React from "react"
import Image from "gatsby-image"


const CircleImage = (props) => (  
   <div className="circle center"> 
      <Image fixed={props.img} alt="illustration of tiger"/> 
   </div>
)

export default CircleImage;