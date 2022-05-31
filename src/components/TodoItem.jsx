import React, { useState } from "react";

export default function TodoItem({ task }) {
  const [state, setState] = useState();
  return (
    <div id="task">
      <h2>
        {state === true ? (
          <button
            class="buttoncompleta"
            onClick={() => setState(state === false)}
          >
            completa
          </button>
        ) : (
          <button
            class="buttonpendiente"
            onClick={() => setState(state === false)}
          >
            pendiente
          </button>
        )}
        {task.id + "." + task.name}
      </h2>
    </div>
  );
}
