import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Button from "./button"
import Scroll from "./scroll"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: `fixed`,
      width:` 100%`,
      top: `0`,
      backgroundColor: `transparent`,
      marginBottom: `1.45rem`,
      zIndex: `500`
    }}
  >
    <div className="header-container"
      style={{
        margin: `0 auto`,
        maxWidth: `90vw`,
        padding: `2.4rem 1.0875rem`,
      }}
    >

      <Link name="home" to="/">
        <div className="home-button"></div>
      </Link> 

      <div> 
      <Button url="/about">about</Button>
      <Scroll className="redirect-button" to="#work">work</Scroll> 
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  children: PropTypes.node.isRequired
}


Header.defaultProps = {
  siteTitle: ``,
}

export default Header
