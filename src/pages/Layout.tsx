import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet, useParams } from "react-router-dom";
import HomePage from "./HomePage";
import GameDetailPage from "./GameDetailPage";

const Layout = () => {
  const { slug } = useParams();
  return (
    <>
      <NavBar />

      <Box padding={5}>
        {/* <Outlet /> */}
        {slug ? <GameDetailPage /> : <HomePage />}
      </Box>
    </>
  );
};

export default Layout;
