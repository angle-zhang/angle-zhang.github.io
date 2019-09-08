import React from "react"
import PropTypes from "prop-types"
import RedirectButton from "./redirectButton"

import { StaticQuery, graphql } from "gatsby"

const projectIcon = () => ( 
    <StaticQuery 
        query = {graphql`
            query { 
                file(relativePath: { eq: "landing.jpg" }) {
                    childImageSharp {
                        fixed(width: 600, height: 600){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }           
            }
        `}

        render = { data => { 
            return (null);
        } }

    />
)

const Project = (props) => (
    <div class="project-container">
        <div class="circle project-icon" style={{width: '240px', height: '240px'}}></div>
            <div class="project-info">
            <h1>{props.title}</h1>
            <div>
                <p class="mm-text-box">{props.desc} </p>
                <ul class="tags"> 
                    {props.tags.map( (tag) => <li><span class={tag.substring(0,5)+"-tag tag"}> </span>{tag}</li> )}
                </ul>
                {props.links.map( (link) => (<RedirectButton url={link[1]}>{link[0]}</RedirectButton>))}
            </div>
        </div> 
    </div>
); 

Project.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Project;