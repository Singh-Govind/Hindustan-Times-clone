import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function NewsLetters() {
  return (
    <>
      <Box w="60%">
        <Text fontWeight="bold" pb="1rem" sx={{ color: "white" }}>
          Subscribe to our best newsletters
        </Text>
        <Flex>
          <Select borderRadius="3px" w="60%" bg="white" color="black">
            <option>HT Daily Capsules</option>
            <option>@HT_Ed Calling</option>
            <option>HT Wknd</option>
          </Select>
          <Input
            borderRadius="3px"
            bg="white"
            color="black"
            placeholder="Enter Email Address"
            ml="0.5rem"
          />
          <Box ml="0.5rem">
            <Button
              variant="outline"
              sx={{ borderRadius: "5px", borderRadius: "3px" }}
              _hover={{ backgroundColor: "transparent" }}
            >
              SUBSCRIBE
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box w="30%">
        <Flex justifyContent="flex-end" alignItems="flex-end">
          <Image
            mr="2rem"
            src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/fb-logo.svg"
          />
          <Image
            mr="2rem"
            src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/in-logo.svg"
          />
          <Image
            mr="2rem"
            src="https://images.hindustantimes.com/images/app-images/2022/2/instagram.svg"
          />
          <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/tw-logo.svg" />
        </Flex>
      </Box>
    </>
  );
}
