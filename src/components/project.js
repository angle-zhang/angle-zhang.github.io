import React from "react"
import RedirectButton from "./redirectButton"

const Project = (props) => (
    <div class="project-container">
        <div class="circle" style={{width: '240px', height: '240px'}}></div>
        <div class="project-info">
        <h1>{props.title}</h1>
        <p class="sm-text-box">{props.desc} </p>
        <ul class="tags"> 
            {props.tags.map( (tag) => <li><span class={tag.substring(0,5)+"-tag tag"}> </span>{tag}</li> )}
        </ul>
    <RedirectButton url={props.link}>site</RedirectButton>
    </div> 
    </div>
); 

export default Project;