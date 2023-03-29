import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffectHook() {
  return (
    <div>
      <DataFetching />
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
          <li key={id}>{id}...{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectHook;
