import { HStack, Image } from "@chakra-ui/react";
import water from "../assets/water.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack px="10px">
      <Link to="/">
        <Image borderRadius="50%" opacity={0.5} src={water} boxSize="60px" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
