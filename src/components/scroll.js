import React from "react"
import PropTypes from "prop-types"

/** 
  @props
    @to
**/
const Scroll = (props) => { 
  return <a href="/#work" className={props.className}>{props.children}</a> 
}

Scroll.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Scroll;
