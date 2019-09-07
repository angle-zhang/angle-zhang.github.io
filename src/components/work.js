import React from "react"
import Project from "./project"
import { StaticQuery, graphql } from "gatsby"

const Work = () => (
     <StaticQuery
        query = {graphql`
            query { 
                allProjectsJson { 
                    edges { 
                        node { 
                            title
                            description
                            links 
                            tags
                        }
                    }
                }
            }
        `}

        render = {data =>{ 
            var projects = [];
            data.allProjectsJson.edges.forEach( (project) => { 
                projects.push( 
                    <Project title={project.node.title} desc={project.node.description} tags={project.node.tags} links={project.node.links}>
                    </Project>
                );
            })
              
            return ( projects );
        }}

    /> 
)


export default Work;