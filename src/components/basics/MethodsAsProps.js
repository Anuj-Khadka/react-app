import React, {Component} from "react";

class ParentComponent extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "parent"
      }

      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }

    render(){
        return(
            <ChildComponent clickHandler={this.clickHandler}/>
        )
    }
}


function ChildComponent(props){
    return(
        // normal 
        // <button onClick={props.clickHandler}>Click me!</button>
        // passing parameter 
        <button onClick={()=> props.clickHandler("child")}>Click me!</button>
    )
}








export default ParentComponent;