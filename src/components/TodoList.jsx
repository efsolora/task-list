import TodoItem from "./TodoItem";
import useChange from "../hooks/useChange";
import { useForm } from "react-hook-form";
export default function TodoList() {
  const [todos, handleclick, handledelete] = useChange();
  const { register } = useForm({
    shouldUseNativeValidation: true,
  });

  return (
    <form id="list">
      <input
        type="text"
        id="input-state-id"
        placeholder="Nuevo id/Eliminar"
        {...register("tarea", { required: true, minLength: 1 })}
      ></input>
      <div>
        <label>Nueva tarea</label>
        <input
          type="text"
          id="input-state-nueva-tarea"
          placeholder="Nueva tarea/eliminar"
          name="tarea"
          {...register("tarea", { required: true, minLength: 3 })}
        />
      </div>

      <input
        type="text"
        id="input-state-descrition"
        placeholder="descripción"
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
          .map((todo, tod) => (
            <TodoItem task={todo} key={tod} />
          ))}
      </ul>
    </form>
  );
}
