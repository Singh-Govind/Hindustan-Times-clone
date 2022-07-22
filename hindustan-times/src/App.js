import { Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import LeftSide from "./components/Main Section/Left Side/LeftSide";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <Box>
      {/* <Navbar /> */}
      {/* <LeftSide /> */}
      <AllRoutes />
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
