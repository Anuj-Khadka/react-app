import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

function UseReducerHook2() {
  return (
    <div>
      <DataFetchingState />
    </div>
  );
}

// data fetching with state and useEffect
const DataFetchingState = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        console.log(res.data)
        setLoading(false);
        setPost(res.data);
        setError('')
      })
      .catch((err) => {
        setLoading(false);
        setPost({})
        setError("something went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "loading" : post.title}
      {error ? error : null}
    </div>
  );
};

// data fetching with useReducer

const initialState = {
    post: {},
    error : '',
    loading: true
}

const reducer = (state, action)=>{
    switch(action.type){
        case "FETCH_SUCCESS":
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case "error":
            return error
        case "loading":
            return loading
    }
}

const DataFetchingReducer = () => {
  return (
    <div>
      {loading ? "loading" : post}
      {error ? error : null}
    </div>
  );
};

export default UseReducerHook2;
