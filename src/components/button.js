import PropTypes from "prop-types"
import { Link } from "gatsby"
import React from "react"



const Button = (props) => { 

    return (
        <Link to={props.url} className="redirect-button"> 
            {props.children}
        </Link>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Button;