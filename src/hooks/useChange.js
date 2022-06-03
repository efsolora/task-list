import { useState } from "react";

const useChange = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "tirar la basura" },
    { id: 2, name: "lavar ropa" },
    { id: 3, name: "hacer almuerzo" },
    { id: 4, name: "estudiar" },
    { id: 5, name: "lavar" },
  ]);
  const handleClick = () => {
    const idinput = document.getElementById("input-state-id");
    const nuevatareainput = document.getElementById("input-state-nueva-tarea");
    setTodos([...todos, { id: idinput.value, name: nuevatareainput.value }]);
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

  const handleModify = () => {};
  return [todos, handleClick, handleDelete];
};

export default useChange;
