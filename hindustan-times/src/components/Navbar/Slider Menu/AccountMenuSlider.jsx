import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { UserAuth } from "../../../Context/AuthContext";
import SingOutButton from "./SingOutButton";

function AccountMenuSlider({ isSlideMenuOpen, setSlideMenu }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isSlideMenuOpen === true) onOpen();
    if (isOpen === false) setSlideMenu(false);
  }, [isSlideMenuOpen == true]);

  const { user } = UserAuth();

  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{` My Account`}</DrawerHeader>
          <DrawerBody>
            <Center>
              <Box>
                <Image src={user != null ? user.photoURL : "user"} />
              </Box>
            </Center>
            <Center>
              <Box>
                <Heading>{user != null ? user.displayName : "user"}</Heading>
              </Box>
            </Center>
            <br />
            <br />
            <Box>
              <Center>
                <SingOutButton />
              </Center>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AccountMenuSlider;
