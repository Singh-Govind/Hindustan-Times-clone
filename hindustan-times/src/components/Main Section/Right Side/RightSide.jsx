import { Box, Center, Container, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PictureCard from "../News Cards/PictureCard";

export default function RightSide({ articles }) {
  return (
    <Box>
      <Center mb="10px">
        <Heading as="h3" fontSize="lg" fontWeight="extrabold">
          <span style={{ color: "skyblue", fontSize: "1.5rem" }}>[</span>
          IN PICS
          <span style={{ color: "skyblue", fontSize: "1.5rem" }}>]</span>
        </Heading>
      </Center>
      {/* 
      <PictureCard
        title="Tara Sutaria and Disha Patani with Arjun Kapoor promote Ek Villain Returns"
        imageSrc="https://images.hindustantimes.com/img/2022/07/22/550x309/malaika_arora_1658495664850_1658495771178_1658495771178.jpg"
      /> */}

      {articles.map((el) => (
        <NavLink to={"/details/" + el.title}>
          <PictureCard title={el.title} imageSrc={el.urlToImage} />
        </NavLink>
      ))}
    </Box>
  );
}
