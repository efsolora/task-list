import React, { useState } from "react";

export default function TodoItem({ task }) {
  const [state, setState] = useState();
  return (
    <div id="task">
      <h2>
        {state === true ? (
          <button
            className="buttoncompleta"
            onClick={() => setState(state === false)}
          >
            completa
          </button>
        ) : (
          <button
            className="buttonpendiente"
            onClick={() => setState(state === false)}
          >
            pendiente
          </button>
        )}
        {task.id + "." + task.name}
      </h2>
      <h4>descripción: {task.description}</h4>
    </div>
  );
}
