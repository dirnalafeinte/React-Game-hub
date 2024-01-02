import {Grid, GridItem, Show} from '@chakra-ui/react'
import {NavBar} from "./components/NavBar.tsx";
import {GamesGrid} from "./components/GamesGrid.tsx";
import {GenreList} from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/UseGenres.ts";
import {PlatformSelection} from "./components/PlatformSelection.tsx";


function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null)
    const [selectedPlatform, setSelectedPlatform] = useState<string>('')

  return (
    <>
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
        >
            {/* Navbar */}
            <GridItem area={'nav'}>
                <NavBar></NavBar>
            </GridItem>

            <Show above={'lg'}>
                {/* side panel */}
                <GridItem area={'aside'} paddingX={'5px'}>
                    <GenreList selectedGenre={selectedGenre} handleGenre={(genre) => setSelectedGenre(genre)}/>
                </GridItem>
            </Show>

            {/* Main Content Area */}
            <GridItem area={'main'}>
                <PlatformSelection handleSelection={(platform) => setSelectedPlatform(platform)}/>
                <GamesGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
            </GridItem>
        </Grid>
    </>
  )
}

export default App
