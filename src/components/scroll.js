import React from "react"

const Scroll = (props) => { 
    var direction = props.down ? 'down' : 'up';
    return <a href="#work" className="scroll-button">{'scroll ' + direction}</a> 
  }

export default Scroll;