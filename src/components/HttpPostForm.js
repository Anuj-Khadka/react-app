import axios from "axios";
import React, { Component } from "react";

export class HttpPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      description: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    const { userId, title, description } = this.state;
    return (
      <div>
        <h3>check "formik" website for easy form validation with react</h3>
        <form action="" method="POST">
          <div>
            <div>
              <label htmlFor="userId">ID: </label>
              <input
                type="number"
                name="userId"
                id="userId"
                value={userId}
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={this.changeHandler}
              />
            </div>
            <div>
              <label htmlFor="description"> Description:</label>
              <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={this.changeHandler}
              />
            </div>
            <button type="submit" onClick={this.submitHandler}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default HttpPostForm;
