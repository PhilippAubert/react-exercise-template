import { useState } from "react";

const [userId, setUserId] = useState();

function User({ title, body }) {
  return (
    <section className="">
      <h2>{title}</h2>
      <p> {body} </p>
    </section>
  );
}

export default User;
