import React from "react"
import Scroll from "./scroll"
import CircleImage from "./circleImage"


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
        let el = e.target.nextElementSibling;
        !this.state.active ? el.className += " open" : el.classList.remove("open");
        this.setState( (state) => ( {active: !state.active} ));
    }

    render() { 
        return (
            <>
                <h2 class="category" onClick={e => this.handleClick(e)}> {this.props.title} </h2>
                <div className="skill-elements"> 
                <ul>{this.props.elements.map( el => <li> {el} </li> )}</ul>
                </div> 
            </> 
        )
    }
 }

const Landing = (props) => ( 
    <div>
        <div className="content-container landing-container"> 
            <h1 className="name-header">ANGELA ZHANG</h1>
            <hr/>
            <section class="categories"><span className="square"> </span>  {Object.keys(skills).map( skill => <SkillCategory title={skill} elements={skills[skill]}></SkillCategory>)} </section>  
        </div> 
        <CircleImage src={"landing.jpg"}/> 
        <Scroll className="scroll-button" to={'#work'}>Scroll down</Scroll> 
    </div>
)



export default Landing;