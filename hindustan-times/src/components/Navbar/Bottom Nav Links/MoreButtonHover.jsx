import { Box, VStack } from "@chakra-ui/react";
import React from "react";

export default function MoreButtonHover() {
  let moreMenu = new Array(8).fill(0).map((item, i) => {
    return (
      <VStack key={i}>
        <Box>something</Box>
      </VStack>
    );
  });
  return { moreMenu };
}
