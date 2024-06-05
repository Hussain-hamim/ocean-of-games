// import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import HomePage from "./HomePage";

const Layout = () => {
  return (
    <>
    
      <NavBar />
      <Box padding={5}>
        {/* <Outlet /> */}
        <HomePage />
      </Box>
    </>
  );
};

export default Layout;
