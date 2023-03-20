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
      // .then((res) => this.setState({ posts: res.data }))
      .then((res) => {
        this.setState({ posts: res.data });
      })
      .catch((err) => this.setState({ errMessage: "error retriving data" }));
  }

  render() {
    const { posts, errMessage } = this.state;
    return (
      <div>
        GET Request Http Post List
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
          {errMessage? <div>{errMessage}</div>:null}
      </div>
    );
  }
}

export default HttpPostList;
