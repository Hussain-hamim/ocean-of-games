import { HStack, Image, Text } from "@chakra-ui/react";
import hhamim from "../assets/hhamim.jpg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={hhamim} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
