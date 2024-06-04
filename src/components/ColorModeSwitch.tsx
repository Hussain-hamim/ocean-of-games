import { HStack, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Text onClick={toggleColorMode} as="button" whiteSpace="nowrap">
        {colorMode === "dark" ? "🔆" : "🌛"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
