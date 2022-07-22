import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import AccordianMenu from "./AccordianMenu";
// import React from "react";

export default function Slider({ setSlideMenu, isSlideMenuOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isSlideMenuOpen == true) onOpen();
    if (isOpen === false) setSlideMenu(false);
  }, [isSlideMenuOpen === true]);

  return (
    <>
      <Drawer placement="left" size="sm" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex>
              <Image
                src="https://www.hindustantimes.com/res/images/ht-logo.png"
                maxW="85%"
              />
            </Flex>
            <Flex ml="3rem">
              <Text as="p" fontSize="sm" fontWeight="normal">
                New Delhi 29
              </Text>
              <Text
                as="p"
                fontSize="sm"
                ml="2"
                color="gray"
                fontWeight="normal"
              >
                Friday, July 22, 2022
              </Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Box>
              <SimpleGrid
                columns={2}
                spacing={2}
                fontWeight="bolder"
                fontSize="lg"
                lineHeight={10}
              >
                <VStack alignItems="flex-start">
                  <Text>HOME</Text>
                  <Text>INDIA NEWS</Text>
                  <Text>ENTERTAINMENT</Text>
                  <Text>EDUCATION</Text>
                  <Text>SPORTS</Text>
                  <Text>TRENDING</Text>
                  <Text>OPINION</Text>
                  <Text>WEB STORIES</Text>
                </VStack>
                <VStack alignItems="flex-start">
                  <Text>ASTROLOGY</Text>
                  <Text>LIFESTYLE</Text>
                  <Text>VIDEOS</Text>
                  <Text>PHOTOS</Text>
                  <Text>WORLD NEWS</Text>
                  <Text>CRICKET</Text>
                  <Text>ANALYSIS</Text>
                  <Text>BUSINESS</Text>
                </VStack>
              </SimpleGrid>
            </Box>
            <Box>
              <AccordianMenu title="CRICKET" />
              <AccordianMenu title="CITIES" />
              <AccordianMenu title="LIFESTYLE" />
              <AccordianMenu title="ENTERTAINMENT" />
              <AccordianMenu title="EDUCATION" />
              <AccordianMenu title="ASTROLOGY" />
              <AccordianMenu title="ELECTION" />
              <AccordianMenu title="VIDEOS" />
            </Box>
          </DrawerBody>

          <DrawerFooter
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            mt="2rem"
            pl="2rem"
            pr="3rem"
          >
            <Flex w="100%" justifyContent="space-between">
              <Box>
                <Text fontWeight="bold">Sign in</Text>
              </Box>
              <Box w="30%">
                <Flex w="100%" gap="1rem" justifyContent="space-between">
                  <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/fb-logo.svg" />
                  <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/tw-logo.svg" />
                  <Image src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/in-logo.svg" />
                </Flex>
              </Box>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
