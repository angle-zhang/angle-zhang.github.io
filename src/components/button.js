import { Link } from "gatsby"
import React from "react"

const Button = (props) => { 
    return (
    <Link to={'/'+ props.redirect + '/'} className="redirect-button"> 
    {props.redirect}
    </Link> 
    );
}

export default Button;