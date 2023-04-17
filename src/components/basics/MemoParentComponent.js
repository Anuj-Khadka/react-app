import React, { Component} from "react";

class MemoParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "memo-comp",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "memo-comp",
      });
    }, 2000);
  }

  render() {
    console.log("******Memo Parent********");
    return (
      <div>
        MemoParentComponent
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

const MemoComp = React.memo((props) => {
  console.log("functional memo");
  return <div>this is {props.name}</div>;
});

export default MemoParentComponent;
