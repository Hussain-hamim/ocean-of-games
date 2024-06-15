import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  const [suspense, setSuspense] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          onKeyDown={() => setSuspense(!suspense)}
        />

        <InputRightElement
          children={
            <span>
              {/* <Kbd>Ctrl</Kbd>
              <Kbd marginRight={8}>K</Kbd> */}
              {suspense && (
                <Spinner
                  thickness="2px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  // size="xl"
                />
              )}
            </span>
          }
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
