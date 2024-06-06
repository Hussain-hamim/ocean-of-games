import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <HomePage />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
