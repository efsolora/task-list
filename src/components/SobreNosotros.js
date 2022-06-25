import React from "react";
import { Box, Text } from "@chakra-ui/react";
import bgImage from "./images/logos.jpg";
import bgImage2 from "./images/firebase.jpg";
export default function SobreNosotros() {
  return (
    <Box p={"20px"} w="90%" margin={"auto"} boxShadow="inset 0 0 10px gray">
      <Text fontSize={"20px"}>
        Esta aplicacion es una lista de tareas, que nos permite controlar el
        flujo de actividades en nuestro dia a dia. Podemos crear tareas para una
        facil redordacion y eliminarlas cuando las terminemos.
      </Text>
      <Text fontSize={"20px"}>
        {" "}
        Este aplicativo fue creado por Efrain Solorzano y se utilizaron las
        siguientes tecnologias como: Html, Css, JavaScript, React, Firebase.
      </Text>
      <Box h="40vh" w={"45%"} m="auto" p={"10px"} bgImage={bgImage}></Box>
      <Box h="40vh" w={"45%"} m="auto" p={"10px"} bgImage={bgImage2}></Box>
    </Box>
  );
}
