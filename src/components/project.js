import React from "react"
import PropTypes from "prop-types"
import RedirectButton from "./redirectButton"
import { StaticQuery, graphql } from "gatsby"

const renderVideo = (video) => { 
    return (  
        <>
            <video class="center" id="project-vid" style={{position: 'relative', zIndex: '50' }} width="281"  autoPlay loop muted> 
                <source src={video.node.publicURL} />
            </video> 
            <script> document.getElementById('project-vid').play() </script>
        </> 
    )
}

// query video icon for project
const ProjectVideo = function(props) {
    const {icon} = props;
    return <StaticQuery 
        query = {graphql`
            query { 
                videos: allFile(filter: { extension: {eq: "mp4"} }) {
                    edges { 
                        node { 
                            publicURL
                            relativePath
                        }
                    }
                }           
            }
        `}
        render = { ({videos}) => renderVideo(videos.edges.find(video => video.node.relativePath === icon)) }
    />
}

const Project = (props) =>  {
    return (
        <div class="project-container">
            <div class="circle project-icon" style={{width: '240px', height: '240px'}}>
                {props.icon ? <ProjectVideo icon={props.icon}/> : <></>}
            </div>
                <div class="project-info">
                <h1>{props.title}</h1>
                <div>
                    <p class="mm-text-box">{props.desc} </p>
                    <ul class="tags"> 
                        {props.tags.map( (tag) => <li><span class={tag.substring(0,5)+"-tag tag"}> </span>{tag}</li> )}
                    </ul>
                    {props.links.map( (link) => (<RedirectButton url={link[1]}>{link[0]}</RedirectButton>) )}
                </div>
            </div> 
        </div>
    );
}; 

Project.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Project;