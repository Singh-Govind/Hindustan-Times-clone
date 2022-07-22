import React from "react";
import { Button } from "@chakra-ui/react";

export default function LinkButton() {
  let buttons = new Array(11).fill(0).map((item, i) => (
    <Button
      key={i}
      mr="10px"
      size="sm"
      bg="transparent"
      sx={{
        border: "1px solid #ecedec",
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
        paddingInline: "1rem",
        fontSize: "1rem",
      }}
    >
      Quiz
    </Button>
  ));

  return buttons;
}
