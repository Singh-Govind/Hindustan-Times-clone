import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import LeftSide from "./Left Side/LeftSide";
import BigPictureCard from "./News Cards/BigPictureCard";
import RightSide from "./Right Side/RightSide";
import "./MainSection.css";
import fetchData, {
  getFromHindustanTimes,
  topHeadLines,
} from "../../Data/FetchData";
import { useEffect } from "react";
import { useState } from "react";

export default function MainSection(cat) {
  const [articles2, setArticles2] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [htNews, setHtNews] = useState([]);

  let category = "politics";
  if (cat.cat !== undefined) category = cat.cat.title;

  const loadData = () => {
    getFromHindustanTimes().then((res) => {
      setHtNews(res.data.articles);
    });

    fetchData(category).then((res) => {
      setArticles2(res.data.articles);
    });

    topHeadLines().then((res) => {
      setTopNews(res.data.articles);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container maxW="75%" py="2rem">
      <Flex gap="1rem">
        <Box
          bg="white"
          sx={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <LeftSide topNews={topNews} />
        </Box>

        <Box bg="white" p="1rem">
          <Center mb="1rem">
            <Heading fontSize="2xl" fontWeight="extrabold">
              <span style={{ color: "skyblue", fontSize: "2rem" }}>[</span>
              TOP NEWS
              <span style={{ color: "skyblue", fontSize: "2rem" }}>]</span>
            </Heading>
          </Center>
          <BigPictureCard articles={htNews} />
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            padding: "10px",
          }}
        >
          <RightSide articles={articles2} />
        </Box>
      </Flex>
    </Container>
  );
}
