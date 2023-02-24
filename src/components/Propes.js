import { Component } from "react";
import PropTypes from "prop-types";

function PropsFunction(props) {
  return (
    <div>
      <h1>
        This is a Prop Lesson with {props.type}, and this is {props.rate}
      </h1>
      <p>
        props are the additional properties in React which is similar to the
        parameters in JavaScript.
      </p>
    </div>
  );
}

class PropsClass extends Component {
  render() {
    return (
      <div>
        <h1>this is a Prop with {this.props.type}</h1>
        <p>
          You can use prop with either class or funcion. the only difference is
          the way we use it.
        </p>
      </div>
    );
  }
}

function PropsChild(props) {
  return (
    <div>
      <h1>here we will learn to add child with props children</h1>
      {props.children}
    </div>
  );
}

function PropsExpression(props) {
  return (
    <div>
      <h1>this is expression in props and the sum is: {props.math}</h1>
    </div>
  );
}

// PropTypes
PropsFunction.propTypes = {
  type: PropTypes.string,
  rate: PropTypes.string.isRequired,
};

// PropDefault
PropsClass.defaultProps = {
  type: "class",
};

export { PropsClass, PropsChild, PropsExpression };
export default PropsFunction;
