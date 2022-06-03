import TodoItem from "./TodoItem";
import useChange from "../hooks/useChange";

export default function TodoList() {
  const [todos, handleclick, handledelete] = useChange();

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
      <button id="delete" onClick={handledelete} type="submit">
        Eliminar
      </button>
      <ul>
        {todos
          .sort((a, b) => a.id - b.id)
          .map((todo) => (
            <TodoItem task={todo} />
          ))}
      </ul>
    </div>
  );
}
