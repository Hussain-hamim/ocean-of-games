import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Text
        padding={2}
        paddingLeft={4}
        onClick={toggleColorMode}
        as="button"
        whiteSpace="nowrap"
      >
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
