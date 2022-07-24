import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function DetailsPage() {
  const [singleArticle, setSingleArticle] = useState({});

  let param = useParams();

  document.title = param.title + " | HT TIMES";

  //   console.log("params:", param);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${param.title}&apiKey=5b6f4ebfb448431e9cc9ec1b0cd6a259`
      )
      .then((res) => {
        setSingleArticle(res.data.articles[0]);
      });
  }, []);

  //   console.log("coming to details page consoling page", singleArticle);
  //   console.log(singleArticle.url);

  return (
    <>
      <Navbar />
      <Container maxW="xl">
        <Box
          my="2rem"
          p="1rem"
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          {/* <Text>{singleArticle.source.name}</Text> */}
          <Heading as="h1" mb="2rem" fontSize="xl" fontWeight="semibold">
            {singleArticle.title !== undefined ? singleArticle.title : ""}
          </Heading>
          <Image
            src={singleArticle !== undefined ? singleArticle.urlToImage : ""}
          />
          <Text as="p" my="1rem">
            {singleArticle !== undefined ? singleArticle.content : ""}
          </Text>
          <Text as="p">
            To read more about this{" "}
            <a
              style={{
                color: "blue",
                marginLeft: "2rem",
                textDecoration: "underline",
              }}
              target="_blank"
              href={singleArticle.url !== undefined ? singleArticle.url : ""}
            >
              Click Here
            </a>
          </Text>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
