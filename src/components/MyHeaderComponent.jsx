import React from "react";
import { tasklist } from "../components/tasklist";

function MyHeaderComponent(tasklist) {
  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <h2>Agrega una tarea</h2>
      <>
        <h3>Nombre de la tarea</h3>
        <input type="text"></input>
      </>
    </div>
  );
}

export default MyHeaderComponent;
