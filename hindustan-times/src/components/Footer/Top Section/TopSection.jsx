import {
  Box,
  Button,
  Container,
  HStack,
  Flex,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MainHeading from "../../Navbar/MainHeading";
import DownloadAppIcon from "./DownloadAppIcon";
import NewsLetters from "./NewsLetters";

export default function TopSection() {
  return (
    <Container maxW="75%">
      <Box borderBottom="1px solid rgba(255,255,255,0.2)" mb="1rem">
        <HStack justifyContent="space-between" alignItems="center" my="1rem">
          <MainHeading />
          <DownloadAppIcon />
        </HStack>
        <HStack
          mb="1rem"
          py="1rem"
          maxW="100%"
          justifyContent="space-between"
          sx={{ color: "white" }}
        >
          <NewsLetters />
        </HStack>
      </Box>
    </Container>
  );
}
