import "./User.css";

function User({ picture, title, firstName, lastName, gender }) {
  return (
    <section className="Post">
      <h3>{title}</h3>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <img src={picture} alt={picture}></img>
      <h3>{gender}</h3>
    </section>
  );
}

export default User;
