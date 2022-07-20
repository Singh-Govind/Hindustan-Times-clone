import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import MainHeading from "./MainHeading";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";

export default function TopNavbar() {
  return (
    <div>
      <Container maxW="75%" color="white">
        <Flex justifyContent="space-between" alignItems="center" py="1rem">
          <div>
            <LeftSideContent />
          </div>
          <div>
            <MainHeading />
          </div>
          <div>
            <RightSideContent />
          </div>
        </Flex>
      </Container>
    </div>
  );
}
