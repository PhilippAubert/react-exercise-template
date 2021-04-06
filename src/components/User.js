function User(name, picture, gender) {
  return (
    <section className="Post">
      <h3>{name.title}</h3>
      <h2>{name.first}</h2>
      <h2>{name.last}</h2>
      <img src={picture.medium} alt="here should be a photo"></img>
      <h3>{gender}</h3>
    </section>
  );
}

export default User;
