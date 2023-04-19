import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      getError: true,
    };
  }

  componentDidCatch(error, info){
    console.log(error)
    console.log(info)
  }


  render() {
    if (this.state.getError) {
      return (
        <div>
          <h5>Something went wrong</h5>
        </div>
      );
    }
    return this.props.children;
  }
}

const ErrorChild = ({ name }) => {
  if (name === "noname") {
    throw new Error("error is error");
  }
  return (
    <div>
      <h1>hello {name}</h1>
    </div>
  );
};

export default ErrorBoundary;
export { ErrorChild };
