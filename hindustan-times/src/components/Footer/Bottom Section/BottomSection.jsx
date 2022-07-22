import { Box, Container } from "@chakra-ui/react";
import React from "react";
import BottomFooterLink from "./BottomFooterLink";
import Copyright from "./Copyright";
import FooterIconLinks from "./FooterIconLinks";

export default function BottomSection() {
  return (
    <Box bg="#00131A" color="white" width="100%">
      <Container maxW="75%">
        <BottomFooterLink />
        <FooterIconLinks />
        <Copyright />
      </Container>
    </Box>
  );
}
