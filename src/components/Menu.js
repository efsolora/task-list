import React from "react";
import { Link } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";

export default function Menu() {
  return (
    <Box p={"10px"} textAlign={"center"}>
      <Link to="/">
        {"  "}
        <Button size="sm" colorScheme="teal" variant="outline">
          {" "}
          Menu
        </Button>
      </Link>

      <Link to="/Tareas">
        {"  "}
        <Button size="sm" colorScheme="teal" variant="outline">
          {" "}
          Tareas
        </Button>
      </Link>

      <Link to="/Sobre-Nosotros">
        {"  "}
        <Button size="sm" colorScheme="teal" variant="outline">
          {" "}
          Sobre Nosotros
        </Button>
      </Link>
    </Box>
  );
}