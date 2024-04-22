import { HStack, Image } from "@chakra-ui/react";
import hhamim from "../assets/hhamim.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" px="10px">
      <Image src={hhamim} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
