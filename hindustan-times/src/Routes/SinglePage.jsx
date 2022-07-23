import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import MainSection from "../components/Main Section/MainSection";
import Navbar from "../components/Navbar/Navbar";

export default function SinglePage() {
  const param = useParams();

  document.title = param.title.toUpperCase() + " | HT TIMES";

  return (
    <Box>
      <Navbar />
      <Box bg="#F5F5F5">
        <MainSection cat={param} />
      </Box>
      <Footer />
    </Box>
  );
}
