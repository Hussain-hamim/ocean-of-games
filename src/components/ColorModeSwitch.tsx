import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        // colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text onClick={toggleColorMode} as="button" whiteSpace="nowrap">
        {colorMode === "dark" ? "☀" : "🌃"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
