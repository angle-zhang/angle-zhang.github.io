import PropTypes from "prop-types"
import { Link } from "gatsby"
import React from "react"

import {Event} from "./tracking"

var emitEvent = function(page) { 
    Event("LINK", "Link to " + page + " page", "INPAGE_LINK");     
}

const Button = (props) => { 
    return (
        <Link onClick={emitEvent.bind(props.children)} to={props.url} className="redirect-button"> 
            {props.children}
        </Link>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Button;