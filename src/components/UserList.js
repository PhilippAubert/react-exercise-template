import { User } from "./User.js";
import { useEffect } from "react";
import { useState } from "react";

function UserList(name, picture, gender, User) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("first render");

    const url =
      "https://randomuser.me/api/?inc=email,gender,name,picture&results=10";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  function renderPosts() {
    const postComponents = posts.map((result) => (
      <User
        title={result.name.title}
        firstName={result.name.first}
        lastName={result.name.last}
        key={result.email}
      />
    ));

    return postComponents;
  }

  return <article className="">{renderPosts}</article>;
}

export default UserList;
