import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  // Generator function:

  // function* genFunc() {
  //   yield 1;
  //   yield 2;
  //   return 3;
  // }

  // const genObj = genFunc();
  // console.log(genObj.next());
  // console.log(genObj.next());
  // console.log(genObj.next());

  // // generator function:
  // function* generatorFunc() {
  //   const result = yield "my input";
  //   console.log("in log", result);
  //   return "all done";
  // }

  // const genObj = generatorFunc();
  // console.log(genObj.next());
  // genObj.next("my value");
  // console.log(genObj.next());

  //   // Promises:
  //   let fifteen = Promise.reject(15);
  //   fifteen
  //     .then((value) => console.log(`you got ${value}`))
  //     .catch((err) => console.log(`error ${err}`));
  // // //////////////////
  // function textFile(fileName: string) {
  //   return new Promise((resolve) => {
  //     readTextFile(fileName, (text: string) => resolve(text));
  //   });
  // }

  // textFile("plan.txt").then(console.log);

  /////////////////
  const promises = [
    new Promise((res) => setTimeout(() => res(1), 200)),
    new Promise((res) => setTimeout(() => res(2), 100)),
    new Promise((_, rej) => setTimeout(() => rej(3), 100)),
    new Promise((res) => setTimeout(() => res(4), 300)),
  ];
  // all(): error: 3
  // race(): result: 2
  // any: result: 2
  // allSettled: result: [{}, {}, {}]
  Promise.all(promises)
    .then((res) => console.log("result: ", res))
    .catch((err) => console.log("error", err));

  return (
    <Grid
      templateAreas={{
        base: `'main'`, //for mobile
        lg: `'aside main'`, //for laptop
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box paddingRight={3}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
