
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/UseGames.ts";
import {GameCard} from "./GameCard.tsx";


export const GamesGrid = () => {
    const {games, error} = useGames()

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing={10} padding={'10px'}>
                {games.map(function (game) {
                    return <GameCard key={game.id} game={game}></GameCard>
                })}
            </SimpleGrid>
        </>
    );
};
