import React from "react";
import { Link } from "react-router-dom";
import { Button, Box, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();
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
      <IconButton
        margin={"10px"}
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        alignSelf={"flex-end"}
        onClick={toggleColorMode}
      ></IconButton>
    </Box>
  );
}
