import React, { useState } from "react";
import { Button, IconButton, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import useChange from "../components/hooks/useChange";

export default function TodoItem({ task }) {
  const [todos, handleDelete] = useChange();
  const [state, setState] = useState();
  return (
    <Box id="task" alignItems={"stretch"}>
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
      <IconButton
        onClick={() => handleDelete(todos.id)}
        icon={<FaTrash />}
      ></IconButton>

      <h4>descripción: {task.description}</h4>
    </Box>
  );
}
