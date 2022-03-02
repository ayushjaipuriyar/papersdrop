import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const PostAdd = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const createPost = () => {
    axios
      .post(baseURL, {
        title: "You just created a new post !!",
        body: "This is the body of the new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  };

  if (!post) return "Something went wrong, couldn't recieve the data";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
};

export default PostAdd;
