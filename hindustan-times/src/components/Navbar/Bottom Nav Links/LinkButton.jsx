import React from "react";
import { Button } from "@chakra-ui/react";

export default function LinkButton() {
  const buttonItems = [
    "Quiz",
    "Quickreads",
    "Daily Digest",
    "Videos",
    "India VS England",
    "Trending",
    "Web Stories",
    "Photos",
    "99acres.com",
  ];

  let buttons = new Array(9).fill(0).map((item, i) => (
    <Button
      key={i}
      mr="10px"
      size="xs"
      bg="transparent"
      _hover={{ backgroundColor: "#1FBAD3", color: "white" }}
      sx={{
        border: "1px solid #ecedec",
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
        paddingBlock: "1rem",
        paddingInline: "0.5rem",
        fontSize: "1rem",
      }}
    >
      {buttonItems[i]}
    </Button>
  ));

  return buttons;
}
