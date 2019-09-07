import PropTypes from "prop-types"
import React from "react"

const RedirectButton = (props) => { 
    return (
        <a href={props.url} className="redirect-button"> 
        {props.children}
        </a>
    );
}

RedirectButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default RedirectButton;