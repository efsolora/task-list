import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

export default function TodoItem({ task }) {
  const [state, setState] = useState();
  return (
    <div id="task">
      {state === true ? (
        <Button
          size="sm"
          bgColor={"green.200"}
          colorScheme="teal"
          variant="outline"
          className="buttoncompleta"
          onClick={() => setState(state === false)}
        >
          completa
        </Button>
      ) : (
        <Button
          size="sm"
          bgColor={"red.200"}
          colorScheme="teal"
          variant="outline"
          className="buttonpendiente"
          onClick={() => setState(state === false)}
        >
          pendiente
        </Button>
      )}
      {task.id + "." + task.name}

      <h4>descripción: {task.description}</h4>
    </div>
  );
}
