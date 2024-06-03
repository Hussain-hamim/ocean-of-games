import { HStack, Image } from "@chakra-ui/react";
import water from "../assets/water.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack px="10px">
      <Image borderRadius="50%" opacity={0.5} src={water} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
