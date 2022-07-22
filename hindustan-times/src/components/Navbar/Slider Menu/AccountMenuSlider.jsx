import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import SingOutButton from "./SingOutButton";

function AccountMenuSlider({ isSlideMenuOpen, setSlideMenu }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isSlideMenuOpen === true) onOpen();
    if (isOpen === false) setSlideMenu(false);
  }, [isSlideMenuOpen == true]);

  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{` drawer contents`}</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
            <Box>
              <SingOutButton />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AccountMenuSlider;
