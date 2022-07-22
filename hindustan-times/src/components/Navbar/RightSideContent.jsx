import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { IoGameControllerOutline, IoNewspaperOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";

export default function RightSideContent() {
  return (
    <VStack alignItems="flex-end">
      <HStack spacing="2rem" sx={{ marginBottom: "1rem" }}>
        <Flex alignItems="center">
          <IoGameControllerOutline size="1.5em" />
          <Text fontWeight="600" ml="5px">
            Games
          </Text>
        </Flex>
        <Flex alignItems="center">
          <IoNewspaperOutline size="1.5em" />
          <Text fontWeight="600" ml="5px">
            E-Paper
          </Text>
        </Flex>
        <Flex alignItems="center">
          <BiUser size="1.2em" />
          <Text fontWeight="600" ml="5px">
            Sign In
          </Text>
        </Flex>
      </HStack>
      <HStack>
        <Text fontSize="md">Start 15 Days Free Trial</Text>
        <Button
          sx={{ borderRadius: "2px", fontWeight: "bold", padding: "5px 10px" }}
          bg="white"
          color="black"
          size="xs"
        >
          Subscribe
        </Button>
      </HStack>
    </VStack>
  );
}
