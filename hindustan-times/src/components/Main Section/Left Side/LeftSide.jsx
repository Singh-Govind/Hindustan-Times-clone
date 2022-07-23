import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import fetchData from "../../../Data/FetchData";
import CardWithoutPicture from "../News Cards/CardWithoutPicture";

export default function LeftSide({ topNews }) {
  return (
    <Box w="100%" minW="210px">
      <Center mt="10px">
        <Heading as="h3" fontSize="lg" fontWeight="extrabold">
          <span style={{ color: "skyblue", fontSize: "1.5rem" }}>[</span>
          LATEST NEWS
          <span style={{ color: "skyblue", fontSize: "1.5rem" }}>]</span>
        </Heading>
      </Center>

      {topNews.map((item, i) => (
        <NavLink to={"/details/" + item.title}>
          <CardWithoutPicture
            key={item.publishedAt}
            title={item.title}
            date={item.publishedAt}
          />
        </NavLink>
      ))}
    </Box>
  );
}
