import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import Link from "./Link";

const links = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/latest",
    title: "Lastest",
  },
  {
    id: 3,
    to: "/india",
    title: "India",
  },
  {
    id: 4,
    to: "/world",
    title: "World",
  },
  {
    id: 5,
    to: "/cities",
    title: "Cities",
  },
  {
    id: 6,
    to: "/entertainment",
    title: "Entertainment",
  },
  {
    id: 7,
    to: "/cricket",
    title: "Cricket",
  },
  {
    id: 8,
    to: "/lifestyle",
    title: "LifeStyle",
  },
  {
    id: 9,
    to: "/astrology",
    title: "Astrology",
  },
  {
    id: 10,
    to: "/editorials",
    title: "Editorials",
  },
  {
    id: 11,
    to: "/foryou",
    title: "For You",
  },
  {
    id: 12,
    to: "/shopnow",
    title: "Shop Now",
  },
];

export default function TopLinks() {
  return (
    <HStack justifyContent="space-between">
      {links.map((link) => (
        <NavLink
          style={({ isActive }) =>
            isActive
              ? { color: "#00B1CD", borderBottom: "4px solid #00B1CD" }
              : {}
          }
          key={link.id}
          to={link.to}
        >
          <Link title={link.title} />
        </NavLink>
      ))}
    </HStack>
  );
}
