import TodoItem from "./TodoItem";
import useChange from "../components/hooks/useChange";
import { useForm } from "react-hook-form";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
export default function TodoList() {
  const [todos, handleclick, handledelete] = useChange();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Box id="list" borderRadius={"lg"} margin={"auto"} padding={"5px"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexWrap={"wrap"} direction={"column"}>
          <Input
            maxWidth={"98%"}
            m={"5px"}
            variant="outline"
            size="sm"
            type="text"
            id="input-state-id"
            placeholder="Nuevo id/Eliminar"
            {...register("id", {
              required: true,
              minLength: 1,
            })}
          ></Input>
          <div>
            <Input
              maxWidth={"98%"}
              m={"5px"}
              variant="outline"
              size="sm"
              type="text"
              id="input-state-nueva-tarea"
              placeholder="Nueva tarea/eliminar"
              {...register("task", {
                required: true,
                minLength: 3,
              })}
            />
          </div>

          <Input
            colorScheme="teal"
            maxWidth={"98%"}
            m={"5px"}
            variant="outline"
            size="sm"
            type="text"
            id="input-state-descrition"
            placeholder="descripción"
          ></Input>
          <Button
            m={"5px"}
            size="sm"
            colorScheme="teal"
            variant="outline"
            id="submit"
            onClick={handleclick}
            type="submit"
          >
            Guardar
          </Button>
          <Button
            m={"5px"}
            size="sm"
            colorScheme="teal"
            variant="outline"
            id="delete"
            onClick={handledelete}
            type="submit"
          >
            Eliminar
          </Button>
        </Flex>

        <Flex direction={"column"}>
          {todos
            .sort((a, b) => a.id - b.id)
            .map((todo, tod) => (
              <TodoItem task={todo} key={tod} />
            ))}
        </Flex>
      </form>
    </Box>
  );
}
