import { Box, Flex } from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import React from "react";
import { Navigate } from "react-router-dom";

export default function LeftSideContent() {
  return (
    <Box maxW="100%">
      <Box>
        <Flex alignItems="center" justifyContent="space-between" gap="2.5rem">
          <Flex alignItems="center">
            <HamburgerIcon mr="5px" /> Explore
          </Flex>
          <Flex alignItems="center">
            <Search2Icon mr="5px" />
            Search
          </Flex>
        </Flex>
      </Box>
      <Box mt="1rem">Wednesday, Jul 20, 2022 | New Delhi 27</Box>
    </Box>
  );
}
