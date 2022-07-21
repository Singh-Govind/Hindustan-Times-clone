import { Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import LeftSide from "./components/Main Section/Left Side/LeftSide";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <LeftSide />
      <Footer />
    </Box>
  );
}

export default App;
