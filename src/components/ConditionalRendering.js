import React, { Component } from "react";

class Conditional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    // if_else
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h1>user logged in with element variable</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>user not logged in with element variable</h1>
    //     </div>
    //   );
    // }

    // element variable
    // let message
    // if(this.state.isLoggedIn){
    //     message= <h1>user logged in with element variable</h1>
    // } else{
    //     message= <h1>user not logged in with element variable</h1>
    // }
    // return(
    //     <div>{message}</div>
    // )

    // ternary operator
    // return this.state.isLoggedIn ? (
    //   <h1>logged in with ternary operator</h1>
    // ) : (
    //   <h1>not logged in with ternary operator</h1>
    // );

    // short circuit operator - this is a specific case of ternary operator which will either display something or nothing.
    return(
        this.state.isLoggedIn && <h1>logged in with short circuit</h1>
    )
  }
}

export default Conditional;
