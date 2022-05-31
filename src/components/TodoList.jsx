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
  return (
    <div id="list">
      <ul>
        {todos.map((todo) => (
          <TodoItem task={todo} />
        ))}
      </ul>
    </div>
  );
}
