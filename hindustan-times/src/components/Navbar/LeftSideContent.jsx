import { Box, Text, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import Slider from "./Slider Menu/Slider";
import { useState } from "react";
import ButtonWithIcon from "./signle link components/ButtonWithIcon";

export default function LeftSideContent() {
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);

  return (
    <VStack alignItems="flex-start">
      <HStack
        sx={{ marginBottom: "1rem" }}
        justifyContent="flex-start"
        spacing="2rem"
      >
        <Box onClick={() => setIsSlideMenuOpen(!isSlideMenuOpen)}>
          <ButtonWithIcon title="Explore" Component={CgMenuLeftAlt} />
        </Box>
        <Box>
          <ButtonWithIcon title="Search" Component={BiSearchAlt} />
        </Box>

        <Slider
          isSlideMenuOpen={isSlideMenuOpen}
          setSlideMenu={setIsSlideMenuOpen}
        />
      </HStack>
      <Box>Wednesday, Jul 20, 2022 | New Delhi 27</Box>
    </VStack>
  );
}
