import User from "./User.js";
import { useEffect } from "react";
import { useState } from "react";

function UserList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("first render");
    const baseUrl =
      "https://randomuser.me/api/?inc=email,gender,name,picture&results=10";
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  function renderPosts() {
    const postComponents = posts.map((post) => (
      <Post title={post.title} body={post.body} key={post.key} />
    ));

    console.log(postComponents);
    return postComponents;
  }
  return <article className="postList">{renderPosts}</article>;
}

export default UserList;
