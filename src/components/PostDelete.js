import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const PostDelete = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const deletePost = () => {
    axios.delete(`${baseURL}/1`).then(() => {
      alert("Post deleted!");
      setPost(null);
    });
  };
  if (!post) return "Something went wrong, couldn't recieve the data";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
};

export default PostDelete;
