import TodoItem from "./TodoItem";
import useChange from "../hooks/useChange";
import { useForm } from "react-hook-form";
import React from "react";
export default function TodoList() {
  const [todos, handleclick, handledelete] = useChange();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form id="list" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="input-state-id"
        placeholder="Nuevo id/Eliminar"
        {...register("id", {
          required: true,
          minLength: 1,
        })}
      ></input>
      <div>
        <input
          type="text"
          id="input-state-nueva-tarea"
          placeholder="Nueva tarea/eliminar"
          {...register("task", {
            required: true,
            minLength: 3,
          })}
        />
      </div>

      <input
        type="text"
        id="input-state-descrition"
        placeholder="descripción"
      ></input>
      <button id="submit" onClick={handleclick} type="submit">
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
