import PropTypes from "prop-types"
import React from "react"
import {Event} from "./tracking"

var emitEvent = function(page) { 
    Event("LINK", "Redirect to " + page + " page", "REDIRECT_LINK");    
}

class RedirectButton extends React.Component {
    constructor(props) { 
        super(props);
    }
    
    render() { 
        return (
            <a onClick={emitEvent.bind(this.props.children)} target="_blank" rel="noopener noreferrer" id={this.props.children} href={this.props.url} className="redirect-button"> 
            {this.props.children}
            </a>
        );
    }

}


RedirectButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default RedirectButton;