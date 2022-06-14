import { useState } from "react";

const useChange = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "tirar la basura", description: "a las 6pm" },
    { id: 2, name: "lavar ropa", description: "con jabon Ariel" },
    { id: 3, name: "hacer almuerzo", description: "sancocho" },
    { id: 4, name: "estudiar", description: "para los paraciales" },
    { id: 5, name: "lavar la cocina", description: "despues del almuerzo" },
  ]);
  const handleClick = () => {
    const idinput = document.getElementById("input-state-id");
    const nuevatareainput = document.getElementById("input-state-nueva-tarea");
    const descripcioninput = document.getElementById("input-state-descrition");
    setTodos([
      ...todos,
      {
        id: idinput.value,
        name: nuevatareainput.value,
        description: descripcioninput.value,
      },
    ]);
  };
  const handleDelete = () => {
    const idinput = document.getElementById("input-state-id");
    const nuevatareainput = document.getElementById("input-state-nueva-tarea");
    setTodos(
      todos.filter(
        (todo) =>
          todo.id !== Number(idinput.value) &&
          todo.name !== nuevatareainput.value
      )
    );
  };

  const localStorage = () => {
    const idinput = document.getElementById("input-state-id");
    const nuevatareainput = document.getElementById("input-state-nueva-tarea");
    const descripcioninput = document.getElementById("input-state-descrition");
    setTodos([...todos, localStorage.setItem("todos", JSON.stringify(todos))]);
  };

  return [todos, handleClick, handleDelete, localStorage];
};

export default useChange;
