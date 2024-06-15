import { Box, HStack, Image } from "@chakra-ui/react";
import water from "../assets/water.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { Kbd } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Box textAlign="center" margin={2}>
        <Kbd backgroundColor="blue.500" fontSize="2xl">
          OCEAN
        </Kbd>
        <Kbd backgroundColor="grey">OF</Kbd>
        <Kbd backgroundColor="#3a2339f0" fontSize="2xl">
          GAMES
        </Kbd>
      </Box>
      <HStack px="10px">
        <Link to="/">
          <Image borderRadius="50%" opacity={0.5} src={water} boxSize="60px" />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
