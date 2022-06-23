import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function SobreNosotros() {
  return (
    <Box p={"10px"} boxShadow="0 0 10px gray">
      <Text fontSize={"20px"}>
        Esta aplicacion es una lista de tareas, que nos permite controlar el
        flujo de actividades en nuestro dia a dia. Podemos crear tareas para una
        facil redordacion y eliminarlas cuando las terminemos.
      </Text>
      <Text fontSize={"20px"}>
        {" "}
        En este aplicativo fue creado por Efrain Solorzano y se utilizaron las
        siguientes tecnologias como: Html, Css, JavaScript, React, Firebase.
      </Text>
      <Flex></Flex>
    </Box>
  );
}
