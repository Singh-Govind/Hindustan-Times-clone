import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import MainPictureCard from "./MainPictureCard";

export default function BigPictureCard({
  category,
  title,
  imageUrl,
  date,
  articles,
}) {
  // let dateNew = new Date(date);

  return (
    <>
      <NavLink
        to={articles[0] !== undefined ? `/details/` + articles[0].title : ""}
      >
        <Box
          minW="530px"
          maxW="100%"
          sx={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "5px",
            padding: "1rem",
            mb: "1rem",
          }}
        >
          <Text as="h5" fontWeight="extrabold" color="#00B1CD">
            {articles[0] !== undefined
              ? articles[0].author.toUpperCase()
              : "HT"}
          </Text>
          <Heading as="h2" fontSize="xl" sx={{ marginBlock: "0.5rem" }}>
            {articles[0] !== undefined ? articles[0].title : ""}
          </Heading>
          <Image
            src={articles[0] !== undefined ? articles[0].urlToImage : ""}
            w="100%"
            borderRadius="3px"
          />
          <HStack mt="1rem">
            <Text as="p" color="gray">
              Published on{" "}
              {articles[0] !== undefined ? articles[0].publishedAt : ""}
            </Text>
          </HStack>
        </Box>
      </NavLink>
      <Box>
        {articles.map((article, i) => {
          if (i !== 0)
            return (
              <NavLink
                // key={
                //   articles[0] !== undefined
                //     ? `/details/` + articles[i].publishedAt
                //     : "/"
                // }
                to={
                  articles[0] !== undefined
                    ? `/details/` + articles[i].title
                    : "/"
                }
              >
                <MainPictureCard
                  key={article.publishedAt}
                  title={article.title}
                  imageSrc={article.urlToImage}
                  publishedAt={article.publishedAt}
                  category={article.author}
                />
              </NavLink>
            );
        })}
      </Box>
    </>
  );
}
