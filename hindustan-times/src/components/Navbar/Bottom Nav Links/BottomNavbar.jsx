import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LinkButton from "./LinkButton";
import TopLinks from "./TopLinks";
import MoreButton from "./MoreButton";

export default function BottomNavbar() {
  return (
    <Box>
      <Box border="1px solid #ecedec">
        <Container maxW="75%">
          <Routes>
            <Route path="/" element={<TopLinks />} />
          </Routes>
        </Container>
      </Box>
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        }}
      >
        <Container maxW="75%">
          <Box py="10px">
            <LinkButton />
            <MoreButton />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
