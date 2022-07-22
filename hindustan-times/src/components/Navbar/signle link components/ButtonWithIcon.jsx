import { Flex, Text } from "@chakra-ui/react";
import React from "react";
// import { BiUser } from "react-icons/bi";

export default function ButtonWithIcon({ title, Component }) {
  return (
    <Flex alignItems="center" cursor="pointer">
      <Component size="1.2em" />
      <Text fontWeight="600" ml="5px">
        {title}
      </Text>
    </Flex>
  );
}
