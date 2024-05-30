import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const heading = `${gameQuery.platform?.name || ""}  ${
    genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="3xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
