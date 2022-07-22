import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function AccordianMenu({ title }) {
  return (
    <Accordion allowToggle>
      <AccordionItem mt="5" py={15}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text as="h2" fontWeight="bold" fontSize="lg">
                {title}
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
