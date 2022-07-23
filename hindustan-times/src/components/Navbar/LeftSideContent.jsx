import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import Slider from "./Slider Menu/Slider";
import { useState } from "react";
import ButtonWithIcon from "./signle link components/ButtonWithIcon";
import { useEffect } from "react";
import axios from "axios";

export default function LeftSideContent() {
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);

  const [temp, setTemp] = useState();

  let currentDate = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=28.6353&longitude=77.2250&hourly=temperature_2m&timezone=Asia%2FSingapore`
      )
      .then((res) => {
        setTemp(Math.round(res.data.hourly.temperature_2m[0]));
      });
  }, []);

  return (
    <VStack alignItems="flex-start">
      <HStack
        sx={{ marginBottom: "1rem" }}
        justifyContent="flex-start"
        spacing="2rem"
      >
        <Box onClick={() => setIsSlideMenuOpen(!isSlideMenuOpen)}>
          <ButtonWithIcon title="Explore" Component={CgMenuLeftAlt} />
        </Box>
        <Box>
          <ButtonWithIcon title="Search" Component={BiSearchAlt} />
        </Box>

        <Slider
          isSlideMenuOpen={isSlideMenuOpen}
          setSlideMenu={setIsSlideMenuOpen}
        />
      </HStack>
      <Box>
        {dayNames[currentDate.getDay()]}, {monthNames[currentDate.getMonth()]}{" "}
        {currentDate.getDate()}, {currentDate.getFullYear()} | New Delhi {temp}
        <sup>o</sup>C
      </Box>
    </VStack>
  );
}
