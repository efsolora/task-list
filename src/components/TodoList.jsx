import TodoItem from "./TodoItem";
import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, name: "tirar la basura" },
    { id: 2, name: "lavar ropa" },
    { id: 3, name: "hacer almuerzo" },
    { id: 4, name: "estudiar" },
    { id: 5, name: "lavar" },
  ]);
  const handleclick = () => {
    const idinput = document.getElementById("input-state-id");
    const nuevatareainput = document.getElementById("input-state-nueva-tarea");
    setTodos([...todos, { id: idinput.value, name: nuevatareainput.value }]);
  };
  const handledelete = () => {
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
  return (
    <div id="list">
      <input
        type="text"
        id="input-state-id"
        placeholder="Nuevo id/Eliminar"
      ></input>
      <input
        type="text"
        id="input-state-nueva-tarea"
        placeholder="Nueva tarea/eliminar"
      ></input>
      <button onClick={handleclick} type="submit">
        Guardar
      </button>
      <button onClick={handledelete} type="submit">
        Eliminar
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoItem task={todo} />
        ))}
      </ul>
    </div>
  );
}
