import User from "./User.js";
import { useEffect } from "react";
import { useState } from "react";
import "./UserList.css";

function UserList() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const baseUrl =
      "https://randomuser.me/api/?inc=email,gender,name,picture&results=10";

    let url = baseUrl;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        console.log(data);
      });
  }, []);

  function renderPosts() {
    const postComponents = results.map((result) => (
      <User
        key={result.email}
        title={result.name.title}
        firstName={result.name.first}
        lastName={result.name.last}
        gender={result.gender}
        picture={result.picture.medium}
      />
    ));

    return postComponents;
  }

  return <div> {renderPosts}</div>;
}

export default UserList;
