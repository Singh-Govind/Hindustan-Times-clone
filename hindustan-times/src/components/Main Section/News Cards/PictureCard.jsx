import { Box, Heading, HStack, Image } from "@chakra-ui/react";

export default function PictureCard({ title, imageSrc }) {
  return (
    <HStack
      w="100%"
      minW="300px"
      justifyContent="space-between"
      sx={{
        borderBlock: "1px solid #ececec",
        paddingBlock: "1rem",
        marginTop: "1rem",
      }}
    >
      <Heading as="h3" fontSize="sm" minW="70%">
        {title}
      </Heading>
      <Image src={imageSrc} w="80px" sx={{ objectFit: "contain" }} />
    </HStack>
  );
}
