import { Box, Flex, HStack, Image } from "@chakra-ui/react";

export default function SignHeader() {
  return (
    <HStack
      sx={{
        backgroundColor: "white",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
      }}
      justifyContent="center"
      py="0.7rem"
    >
      <Image
        w="280px"
        src="https://images.livemint.com/sso/newLogos/prod/ht_logo.svg?v2"
      />
    </HStack>
  );
}
