import React from "react"

import ImageTwo from "./img"


const CircleImage = (props) => (  
   <div className="circle center"> 
      <ImageTwo file={props.src}/> 
   </div>
)

export default CircleImage;