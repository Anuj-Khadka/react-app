import React, { Component } from "react";
import axios from "axios";

class HttpPostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errMessage: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .catch(err => this.setState({errMessage: "error retriving data"}));
  }

  render() {
    return <div>GET Request Http Post List</div>;
  }
}

export default HttpPostList;
