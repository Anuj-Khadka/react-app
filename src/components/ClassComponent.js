import { Component } from "react";

class ClassComp extends Component {
  render() {
    return (
    // render is must in class components which either return null or html(JSX)
    <>
      <h2>Class Components</h2>
      <p>
        it can maintain some informattions(state) that is private to that Component.{" "}
      </p>
      <p>maintain own data, known as states</p>
      <p>more feature rich</p>
      <p>provide ifecycle hooks</p>
      <p>complex UI logic</p>
      <p>stateful/smart/container components</p>
      <p>with priate states maintaince and debugging is difficult</p>
    </>
    )
  }
}

export default ClassComp;
