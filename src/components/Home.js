import React from "react";
import { Heading, Button } from "@chakra-ui/react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../components/firebase-confi";

export default function Home() {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <Button
        pos={"absolute"}
        top="0"
        m={"20px"}
        size="sm"
        colorScheme="teal"
        variant="outline"
        id="delete"
        onClick={signIn}
        type="submit"
      >
        SIGN IN GOOGLE
      </Button>
      <Heading
        textAlign={"center"}
        boxShadow="inset 0 0 10px gray"
        margin={"auto"}
        mt="20px"
        maxWidth="50%"
      >
        Bienvenid@ a tu lista de tareas!
      </Heading>
      ;
    </>
  );
}
