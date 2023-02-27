import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello fello",
    };

    // approach 3
    this.clickHandler = this.clickHandler.bind(this);
  }

  //   approach 1, 2, 3
  clickHandler() {
    this.setState({
      message: "bye bye",
    });
  }

  //   approach 4
  clickHandler = () => {
    this.setState({
      message: "bye arrow function",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* when you call the function while adding event listener, it will execue instantly the page loads. */}
        {/* <button onClick={this.clickHandler()}>Click Me!</button> */}

        {/* define the function instead. this is binding event in class which is associated with js bind() */}
        {/* approach 1 - is a lot difficult to hande with time*/}
        {/* <button onClick={this.clickHandler.bind(this)}>1. Click Me!</button> */}

        {/* approach 2 - this works while passing parameter when event handling */}
        {/* <button onClick={() => this.clickHandler()}>2. Click Me!</button> */}

        {/* approach 3 - this is recommended by react docs. you need to bind inside the class constructor */}
        {/* <button onClick={this.clickHandler}>3. Click Me!</button> */}
        
        {/* approach 4 - use the arrow function in while defining the function. this is also good but is in testing phase */}
        <button onClick={this.clickHandler}>4. Click Me!</button>
      </div>
    );
  }
}

export default EventBind;
