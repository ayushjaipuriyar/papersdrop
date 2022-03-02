import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const PostUpdate = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const updatePost = () => {
    axios
      .put(`${baseURL}/1`, {
        title: "You just updated the comment!",
        body: "This is the bosy of the updated post.",
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
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
};
export default PostUpdate;
