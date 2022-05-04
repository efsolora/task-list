import React from "react";
import { useState } from "react";

const MyTaskList = (props) => {
  const [task, setTask] = useState("");
  const [validation, setValidation] = useState(true);

  const taskEven = (event) => {
    setTask(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      props.newTaskList(task);
      setTask("");
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <span>Añadir tarea</span>
        <input type="text" value={task} onChange={taskEven} />
        <button>Añadir</button>
      </form>
      {!validation && <div>Añade una tarea</div>}
    </div>
  );
};

export default MyTaskList;
