import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Button from "./button"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#172F22`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header-container"
      style={{
        margin: `0 auto`,
        maxWidth: `85vw`,
        padding: `2.4rem 1.0875rem`,
      }}
    >

      <Link to="/">
        <div className="home-button"></div>
      </Link> 

      <div> 
      <Button redirect="about"> </Button>
    <Button redirect="work"> </Button> 
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
