import { VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import BottomSection from "./Bottom Section/BottomSection";
import Copyright from "./Bottom Section/Copyright";
import MiddleSection from "./Middle Section/MiddleSection";
import TopSection from "./Top Section/TopSection";

export default function Footer() {
  return (
    <VStack bg="#011E29" mt="2rem" pt="1rem">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </VStack>
  );
}
