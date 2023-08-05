function Profile(props) {
  const person = props.person;
  return (
    <div className="profileCard">
      <h3>{person.name}</h3>
      <h4>{person.city}</h4>
      <img src={person.img} alt={person.name} />
    </div>
  );
}

export default Profile;