function TodoList() {
  const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "white",
    },
  };
  return (
    <div style={person.theme}>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt={person.name}
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}
export default TodoList;
