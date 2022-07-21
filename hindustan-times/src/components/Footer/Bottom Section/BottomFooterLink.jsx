import { Box, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function BottomFooterLink() {
  return (
    // <VStack
    //   fontSize="md"
    //   fontWeight="bold"
    //   sx={{ border: "1px solid rgba(255,255,255,0.4" }}
    //   py="1rem"
    // >
    //   <HStack justifyContent="space-between" width="80%">
    //
    //
    //
    //
    //
    //   </HStack>
    //   <HStack justifyContent="space-evenly" width="100%">
    //
    //
    //
    //
    //
    //
    //   </HStack>
    // </VStack>

    <SimpleGrid
      justifyContent="space-between"
      fontSize="md"
      fontWeight="bold"
      sx={{ border: "1px solid rgba(255,255,255,0.4" }}
      py="1rem"
      columns={6}
    >
      <Box>
        <Text mb="1rem">About Us</Text>
        <Text>Subscription</Text>
      </Box>
      <Box>
        <Text mb="1rem">Contact Us</Text>
        <Text>Disclaimer</Text>
      </Box>
      <Box>
        <Text mb="1rem">Terms of Use</Text>
        <Text>Print Ad Rates</Text>
      </Box>
      <Box>
        <Text mb="1rem">Privacy Policy</Text>
        <Text>Code Of Ethics</Text>
      </Box>
      <Box>
        <Text mb="1rem">Weather Today</Text>
        <Text>Site Map</Text>
      </Box>
      <Box>
        <Text mb="1rem">HT Newsletters</Text>
        <Text>RSS Feeds</Text>
      </Box>
    </SimpleGrid>
  );
}
