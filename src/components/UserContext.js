import React, { Component } from "react";


// always keep this variables capital
const UserContext = React.createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

class ComponentMain extends Component {
  render() {
    return (
      <UserProvider value="valu">
        <ComponentA />
      </UserProvider>
    );
  }
}

class ComponentA extends Component {
  render() {
    return <ComponentB />;
  }
}

class ComponentB extends Component {
  render() {
    return <ComponentC />;
  }
}

class ComponentC extends Component {
  render() {
    return (
    <UserConsumer>
        {
        (username)=>{
            return <div>this is {username}</div>
        }
        }
    </UserConsumer>
    );
  }
}

export default ComponentMain;
