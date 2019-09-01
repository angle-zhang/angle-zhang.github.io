import React from "react"

const Scroll = (props) => { 
    var direction = props.down ? 'down' : 'up';
    return <p className="scroll-button">{'scroll ' + direction}</p> 
  }
  
export default Scroll;