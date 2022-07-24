import { Box, Heading, Text } from "@chakra-ui/react";

export default function CardWithoutPicture({ title, date, time }) {
  return (
    <Box w="100%" p="10px" mt="5px">
      <Box pb="1rem" sx={{ borderBottom: "1px solid #ececec" }}>
        <Heading
          as="h3"
          mb="5px"
          fontSize="sm"
          color="rgba(0,0,0,0.8)"
          fontWeight="bold"
        >
          {title}
        </Heading>
        <Text as="p" color="gray" fontSize="sm">
          Published on {date}
        </Text>
        {/* <Text as="p" color="gray" fontSize="sm">
          {time}
        </Text> */}
      </Box>
    </Box>
  );
}
