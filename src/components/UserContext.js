import React, { Component } from "react";

// always keep this variables capital
// you can also add a default value within createContext() method
const UserContext = React.createContext("(default value)");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

class ComponentMain extends Component {
  render() {
    return (
      //   <UserProvider value="valu">
      <ComponentA />
      //   </UserProvider>
    );
  }
}

class ComponentA extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        this is compA with static contextType {this.context}
        <ComponentB />
      </div>
    );
  }
}

class ComponentB extends Component {
  render() {
    return (
      <div>
        this is CompB with obj contextType {this.context}
        above two ways can be troublesome because: <br />
        1. it only works on class components.
        <br />
        2. only one value can be passed through it.
        <br />
        <br />
        <br />
        <ComponentC />
      </div>
    );
  }
}
ComponentB.contextType = UserContext;

class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>this is CompC with UserConsumer {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentMain;
