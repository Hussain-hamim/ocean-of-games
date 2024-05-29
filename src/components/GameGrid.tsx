import {
  Box,
  Button,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error.message}</Text>;

  /** to add infinite scroll wrap this code on simpleGrid comp below:
   * 
   * first the library should be downloaded from: react-infinite-scroll-component
   * then:
   *
   * // total number of item we have fetched so far: 
   *const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

   * 
   * <InfiniteScroll
    *  dataLength={fetchedGamesCount}
    *  hasMore={!!hasNextPage}
    *  next={() => fetchNextPage()}
    *  loader={<Spinner />}
   *
   * >
   * //// SimpleGrid comp goes here
   * </InfiniteScroll>
   *
   */

  return (
    <Box padding="10px">
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={5}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {isLoading ? (
        <Skeleton marginY={5} width="100px" height="35px">
          <SkeletonText />
        </Skeleton>
      ) : (
        <>
          {hasNextPage && (
            <Button onClick={() => fetchNextPage()} marginY={5}>
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </Button>
          )}
        </>
      )}
    </Box>
  );
};

export default GameGrid;
