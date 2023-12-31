import {Grid, GridItem, Show} from '@chakra-ui/react'

function App() {

  return (
    <>
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}>
            {/* Navbar */}
            <GridItem area={'nav'} bg="blue.500">
                Navbar
            </GridItem>

            <Show above={'lg'}>
                {/* side panel */}
                <GridItem area={'aside'} bg="green.300">
                    Side Panel
                </GridItem>
            </Show>

            {/* Main Content Area */}
            <GridItem area={'main'} bg="gray.100">
                Main Area
            </GridItem>
        </Grid>
    </>
  )
}

export default App
