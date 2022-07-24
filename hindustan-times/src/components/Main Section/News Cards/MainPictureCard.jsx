import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";

export default function MainPictureCard({
  title,
  imageSrc,
  publishedAt,
  category,
}) {
  return (
    <HStack
      justifyContent="space-between"
      sx={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "5px",
        padding: "1rem",
        mb: "1rem",
      }}
    >
      <Box>
        <Text as="h5" fontWeight="extrabold" pb="10px" color="#00B1CD">
          {category.toUpperCase()}
        </Text>
        <Heading as="h3" fontSize="sm" minW="70%">
          {title}
        </Heading>

        <HStack mt="1rem">
          <Text as="p" color="gray">
            Published on {publishedAt}
          </Text>
        </HStack>
      </Box>
      <Image
        src={imageSrc}
        w="180px"
        sx={{ objectFit: "contain", borderRadius: "5px" }}
      />
    </HStack>
  );
}
