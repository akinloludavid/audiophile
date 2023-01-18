import { Box } from "@chakra-ui/react";
import { IChildren } from "../../types";
import Footer from "../Footer";
import Navbar from "../Navbar";

const PageLayout = ({ children }: IChildren) => {
  return (
    <Box display={"flex"} flexDirection="column" minH="100vh" w="100vw">
      <Box mb={["97px"]}>
        <Navbar />
      </Box>
      {children}
      <Box mt="auto">
        <Footer />
      </Box>
    </Box>
  );
};

export default PageLayout;
