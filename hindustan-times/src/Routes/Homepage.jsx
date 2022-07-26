import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import MainSection from "../components/Main Section/MainSection";
import MainHeading from "../components/Navbar/MainHeading";
import Navbar from "../components/Navbar/Navbar";

export default function Homepage() {
  document.title = "HOMEPAGE" + " | HT TIMES";

  return (
    <Box>
      <Navbar />
      <Box bg="#F5F5F5">
        <MainSection />
      </Box>
      <Footer />
    </Box>
  );
}
