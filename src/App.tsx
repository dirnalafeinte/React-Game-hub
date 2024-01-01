import {Grid, GridItem, Show} from '@chakra-ui/react'
import {NavBar} from "./components/NavBar.tsx";
import {GamesGrid} from "./components/GamesGrid.tsx";
import {GenreList} from "./components/GenreList.tsx";


function App() {

  return (
    <>
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}>
            {/* Navbar */}
            <GridItem area={'nav'}>
                <NavBar></NavBar>
            </GridItem>

            <Show above={'lg'}>
                {/* side panel */}
                <GridItem area={'aside'}>
                    <GenreList/>
                </GridItem>
            </Show>

            {/* Main Content Area */}
            <GridItem area={'main'}>
                <GamesGrid/>
            </GridItem>
        </Grid>
    </>
  )
}

export default App
