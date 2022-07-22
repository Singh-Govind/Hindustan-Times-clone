import React from "react";
import { Box, Container, HStack } from "@chakra-ui/react";
import MainHeading from "./MainHeading";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";

export default function TopNavbar() {
  return (
    <div>
      <Box bg="#011E29">
        <Container maxW="75%" color="white">
          <HStack justifyContent="space-between" alignItems="center" py="1rem">
            <div style={{ width: "100%" }}>
              <LeftSideContent />
            </div>
            <div style={{ width: "100%", marginInline: "1rem" }}>
              <MainHeading />
            </div>
            <div style={{ width: "100%" }}>
              <RightSideContent />
            </div>
          </HStack>
        </Container>
      </Box>
    </div>
  );
}
