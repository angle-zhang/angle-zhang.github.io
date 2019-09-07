import React from "react"

class Loader extends React.Component { 
    componentDidMount(){ 
        setTimeout(()=> {
            document.querySelector('.loading-screen').className += " close"
        }, 1000)
    }
    render(){ 
        return (
            <div class="loading-screen"> 
                <div class="loading circle center"> </div> 
            </div> 
        );
    }
}

export default Loader