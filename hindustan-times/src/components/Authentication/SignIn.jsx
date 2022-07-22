import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./SignIn.css";

import React from "react";
import SignHeader from "./SignHeader";

import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignIn() {
  const { isAuthenticated, handleAuthentication, googleSignIn, user } =
    UserAuth();

  const navigate = useNavigate();

  const handleGoogleSingIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("sigin page user: ", user);
  // useEffect(() => {
  //   if (user != null) {
  //     handleAuthentication(true);
  //     setTimeout(() => navigate("/"), 1000);
  //   }
  // }, []);

  return (
    <Box>
      <SignHeader />
      <Container size="md">
        <Center my="2rem">
          <Text as="h1" fontSize="3xl" fontWeight="bold">
            Login or Register
          </Text>
        </Center>
        <VStack
          w="100%"
          py="2rem"
          gap="0.5rem"
          alignItems="center"
          bg="white"
          border="1px solid rgba(0,0,0,0.2)"
        >
          <Button
            w="80%"
            bg="white"
            sx={{
              borderRadius: "0",
              border: "1px solid rgba(155,155,155,0.6)",
            }}
            onClick={handleGoogleSingIn}
          >
            Sign in with Google
          </Button>
          <Box w="80%">
            <Button
              colorScheme="blue"
              w="100%"
              sx={{
                borderRadius: "0",
              }}
            >
              Sign in with Facebook
            </Button>
          </Box>
          <Button
            w="80%"
            bg="black"
            color="white"
            sx={{
              borderRadius: "0",
              border: "1px solid rgba(155,155,155,0.6)",
            }}
            _hover="none"
          >
            Sign in with Apple
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
