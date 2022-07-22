import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Link({ title }) {
  return (
    <Box p="10px">
      <Text fontSize="md" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
}
