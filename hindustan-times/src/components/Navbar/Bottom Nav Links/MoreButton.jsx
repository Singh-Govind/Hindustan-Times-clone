import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";

export default function MoreButton() {
  return (
    <Button
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
      <Flex alignItems="center">
        + 9 More{" "}
        <AiOutlineDown
          style={{
            marginLeft: "5px",
            marginTop: "5px",
            fontWeight: "bold",
          }}
          size="13px"
        />
      </Flex>
    </Button>
  );
}
