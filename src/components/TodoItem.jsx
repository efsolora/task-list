import React, { useState } from "react";
import { Button, Heading, Box } from "@chakra-ui/react";

export default function TodoItem({ task }) {
  const [state, setState] = useState();
  return (
    <Box id="task" alignItems={"stretch"}>
      <Heading as="h3" size={"md"}>
        {task.id + "." + task.name}
      </Heading>

      <Heading as={"h4"} size="sm">
        descripción: {task.description}
      </Heading>
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
    </Box>
  );
}
