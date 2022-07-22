import { Box, Text, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";

export default function LeftSideContent() {
  return (
    <VStack alignItems="flex-start">
      <HStack
        sx={{ marginBottom: "1rem" }}
        justifyContent="flex-start"
        spacing="2rem"
      >
        <Flex alignItems="center">
          <CgMenuLeftAlt size="1.5em" />
          <Text fontWeight="600" ml="5px">
            Explore
          </Text>
        </Flex>

        <Flex alignItems="center">
          <BiSearchAlt size="1.5em" />
          <Text fontWeight="600" ml="5px">
            Search
          </Text>
        </Flex>
      </HStack>
      <Box>Wednesday, Jul 20, 2022 | New Delhi 27</Box>
    </VStack>
  );
}
