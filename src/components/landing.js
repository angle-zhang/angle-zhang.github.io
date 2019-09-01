import React from "react"
import Scroll from "../components/scroll"

const skills = { 
    "Web Dev": ["html5", "css3", "js", "react.js", "redux.js"],
    "Creative Dev": ["webGL", "three.js"],
    "Design": ["figma", "photoshop", "indesign", "prototyping", "illustration"]
}
  
class SkillCategory extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = { 
            active: false
        }
    }

    handleClick(e) { 
        e.target.nextElementSibling.style.display = "block"
    }

    render() { 
        return (
            <div>
                <h2 onClick={e => this.handleClick(e)}> {this.props.title} </h2>
                <div className="skill-elements"> 
                {this.props.elements.map( el => <p> {el} </p> )}
                </div> 
            </div> 
        )
    }
 }

const Landing = () => ( 
    <div>
        <h1>ANGELA ZHANG</h1>
        <div> 
            {Object.keys(skills).map( skill => <SkillCategory title={skill} elements={skills[skill]}></SkillCategory>)} 
        </div> 
        <Scroll down /> 
    </div>
)



export default Landing;