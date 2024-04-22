import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          //object for responsiveness for different devices
          //we have different breakpoints like:
          //sm: 30em md: 48em lg: 62em xl: 80 2x: 96em

          base: `'nav' 'main'`, //for moblie
          lg: `'nav nav' 'aside main'`, //for laptop
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        {/* this component will only render when query which is above lg(large screen.
          so this component wont render on mobile devices.
        ) */}
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
