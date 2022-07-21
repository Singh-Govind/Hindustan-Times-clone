import { Box, Text, Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export default function MiddleSection() {
  return (
    <Container
      maxW="75%"
      color="rgba(255,255,255,0.5)"
      sx={{ lineHeight: "2rem" }}
    >
      <SimpleGrid columns={6} gap="1rem">
        <Box>
          <Box fontSize="md" color="white" fontWeight="bold">
            <Text>LATEST NEWS</Text>
            <Text>WORLD NEWS</Text>
            <Text>INDIA NEWS</Text>
            <Text>CRICKET</Text>
            <Text>CITY NEWS</Text>
          </Box>
          <Box>
            <Text>Benguluru</Text>
            <Text>Bhopal</Text>
            <Text>Chandigarh</Text>
            <Text>Dehradun</Text>
            <Text>Delhi</Text>
            <Text>Gurugram</Text>
            <Text>Indore</Text>
            <Text>Jaipur</Text>
            <Text>Kolkata</Text>
            <Text>Lucknow</Text>
            <Text>Mumbai</Text>
            <Text>Noida</Text>
            <Text>Patna</Text>
            <Text>Pune</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text>Ranchi</Text>
            <Text>Others</Text>
          </Box>
          <Box color="white" fontSize="md" fontWeight="bold">
            <Text>ENTERTAINMENT</Text>
          </Box>
          <Box>
            <Text>Bollywood</Text>
            <Text>Hollywood</Text>
            <Text>Music</Text>
            <Text>Tamil Cinema</Text>
            <Text>Telgu Cinema</Text>
            <Text>TV</Text>
            <Text>Web Stories</Text>
            <Text>Others</Text>
          </Box>
          <Box>
            <Text color="white" fontSize="md" fontWeight="bold">
              ASTROLOGY
            </Text>
            <Text>Horoscope</Text>
            <Text>Vastu</Text>
            <Text>GemStones</Text>
            <Text>Panchang Today</Text>
            <Text>Compatibality Calculator</Text>
            <Text>Your Fortuane Today</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text color="white" fontSize="md" fontWeight="bold">
              EDUCATION
            </Text>
            <Text>Admission News</Text>
            <Text>Board Exams</Text>
            <Text>Competative Exams</Text>
            <Text>Employement News</Text>
            <Text>Exam Results</Text>
            <Text>Education News</Text>
          </Box>
          <Box>
            <Text color="white" fontWeight="bold" fontSize="md">
              LIFESTYLE
            </Text>
            <Text>Art and Culture</Text>
            <Text>Brunch</Text>
            <Text>Fashion</Text>
            <Text>Festivals</Text>
            <Text>Health</Text>
            <Text>Health</Text>
            <Text>Reciepes</Text>
            <Text>Relationship</Text>
            <Text>Travel</Text>
          </Box>
          <Box>
            <Text color="white" fontWeight="bold" fontSize="md">
              WEB STORIES
            </Text>
            <Text color="white" fontWeight="bold" fontSize="md">
              TRENDING
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text color="white" fontWeight="bold" fontSize="md">
              BUSINESS
            </Text>
            <Text color="white" fontWeight="bold" fontSize="md">
              PHOTOS
            </Text>
            <Text color="white" fontWeight="bold" fontSize="md">
              VIDEOS
            </Text>
            <Text color="white" fontWeight="bold" fontSize="md">
              BUDGET
            </Text>
            <Text color="white" fontWeight="bold" fontSize="md">
              ENVIRONMENT
            </Text>
            <Text color="white" fontWeight="bold" fontSize="md">
              SCIENCE
            </Text>
            <Text color="white" fontWeight="bold" fontSize="md">
              OPINION
            </Text>
            <Text color="white" fontWeight="bold" fontSize="md">
              EDITORIALS
            </Text>
          </Box>
          <Box>
            <Text color="white" fontWeight="bold" fontSize="md">
              SPORTS
            </Text>
            <Text>Badminton</Text>
            <Text>Football</Text>
            <Text>Hockey</Text>
            <Text>Tennis</Text>
            <Text>Others</Text>
          </Box>
          <Box color="white" fontWeight="bold" fontSize="md">
            <Text>Books</Text>
            <Text>HT INSIGHTS</Text>
            <Text>HT WEEKENDS</Text>
            <Text>BRAND POST</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text color="white" fontWeight="bold" fontSize="md">
              BRAND STORIES
            </Text>
          </Box>
          <Box>
            <Text color="white" fontWeight="bold" fontSize="md">
              ELECTIONS
            </Text>
            <Text>Uttar Pradesh Assembly Election</Text>
            <Text>Punjab Assembly Election</Text>
            <Text>Goa Assembly Election</Text>
            <Text>Uttarakhand Assembly Election</Text>
            <Text>Manipur Assembly Election</Text>
          </Box>
          <Box color="white" fontWeight="bold" fontSize="md">
            <Text>QUICKREADS</Text>
            <Text>COVID 19</Text>
            <Text>OMICRON</Text>
            <Text>ASSEMBLY ELECTION</Text>
          </Box>
          <Box>
            <Text color="white" fontWeight="bold" fontSize="md">
              GAMES
            </Text>
            <Text>Daily Sudoku</Text>
            <Text>Daily Crossword</Text>
            <Text>Daily Word Jumble</Text>
            <Text color="white" fontWeight="bold" fontSize="md">
              QUIZ
            </Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Text color="white" fontWeight="bold" fontSize="md">
              TENDING NEWS
            </Text>
            <Text>Horoscope Today</Text>
            <Text>JEE Main 2022 Live Updates</Text>
            <Text>CBSE Result 2022 Live</Text>
            <Text>Presidential Election Result LIVE</Text>
          </Box>
          <Box>
            <Text color="white" fontWeight="bold" fontSize="md">
              TENDING TOPICS
            </Text>
            <Text>Today Horoscope</Text>
            <Text>Presidential Election</Text>
            <Text>Maharashtra</Text>
            <Text>Sri Lanka</Text>
            <Text>Parliament</Text>
            <Text>Monsoon</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
