import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>date added</MenuItem>
        <MenuItem>name</MenuItem>
        <MenuItem>relaease data</MenuItem>
        <MenuItem>by gnere</MenuItem>
        <MenuItem>by mangal</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
