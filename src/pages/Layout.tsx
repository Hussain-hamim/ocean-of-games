import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import HomePage from "./HomePage";
import GameDetailPage from "./GameDetailPage";

const Layout = () => {
  const { slug } = useParams();
  return (
    <>
      <NavBar />
      <Box padding={5}>{slug ? <GameDetailPage /> : <HomePage />}</Box>
    </>
  );
};

export default Layout;
