import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Copyright() {
  return (
    <Container maxW="75%">
      <Flex
        color="rgba(255,255,255,0.7)"
        justifyContent="center"
        alignItems="center"
        mb="1rem"
      >
        <AiOutlineCopyrightCircle style={{ marginRight: "5px" }} />
        2022 HindustanTimes
      </Flex>
    </Container>
  );
}
