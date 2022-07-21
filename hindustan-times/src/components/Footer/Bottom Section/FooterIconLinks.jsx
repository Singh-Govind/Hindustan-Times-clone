import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export default function FooterIconLinks() {
  return (
    <SimpleGrid
      columns={10}
      width="100%"
      alignItems="center"
      justifyContent="flex-start"
      gap="2rem"
      my="10px"
      py="1rem"
      sx={{
        borderBlock: "1px solid rgba(255, 255, 255, 0.4)",
      }}
    >
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/mint-logo.svg" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/HH-logo.svg" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/mint-lounge.svg" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/HT_Auto.svg" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-tech.svg" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-bangla.svg" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/healthshots.png" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/OTT-icon.png" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/slurrp-icon.svg" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/smartcast-logo.png" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-kannada.png" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-tamil.png" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-telugu.png" />
      </Box>
      <Box>
        <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-marathi.png" />
      </Box>
    </SimpleGrid>
  );
}
