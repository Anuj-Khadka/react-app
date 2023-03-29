import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffectHook() {
  return (
    <div>
      {/* <DataFetching /> */}
      <SingleDataFetching />
    </div>
  );
}

const DataFetching = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post, id) => (
          <li key={id}>
            {id}...{post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SingleDataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState("1");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />

      <br />
      <div>
        <p>{post.title}</p>
        <i>{post.body}</i>
      </div>
    </div>
  );
};




export default UseEffectHook;
