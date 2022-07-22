import { Button, Box, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoGameControllerOutline, IoNewspaperOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import ButtonWithIcon from "./signle link components/ButtonWithIcon";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, UserAuth } from "../../Context/AuthContext";
import AccountMenuSlider from "./Slider Menu/AccountMenuSlider";

export default function RightSideContent() {
  const { isAuthenticated } = useContext(AuthContext);
  const [isRightSlideMenuOpen, setIsRightSlideMenuOpen] = useState(false);

  const navigate = useNavigate();
  const user = UserAuth();
  console.log("rightside content", user);

  const handleSignInClick = () => {
    user.isAuthenticated
      ? setIsRightSlideMenuOpen(!isRightSlideMenuOpen)
      : navigate("/signin");
  };

  return (
    <VStack alignItems="flex-end">
      <HStack spacing="2rem" sx={{ marginBottom: "1rem" }}>
        <ButtonWithIcon title="Games" Component={IoGameControllerOutline} />
        <ButtonWithIcon title="E-Paper" Component={IoNewspaperOutline} />
        <Box onClick={handleSignInClick}>
          <ButtonWithIcon title="Sign In" Component={BiUser} />
        </Box>
      </HStack>
      <AccountMenuSlider
        isSlideMenuOpen={isRightSlideMenuOpen}
        setSlideMenu={setIsRightSlideMenuOpen}
      />
      <HStack>
        <Text fontSize="md">Start 15 Days Free Trial</Text>
        <Button
          sx={{ borderRadius: "2px", fontWeight: "bold", padding: "5px 10px" }}
          bg="white"
          color="black"
          size="xs"
        >
          Subscribe
        </Button>
      </HStack>
    </VStack>
  );
}
