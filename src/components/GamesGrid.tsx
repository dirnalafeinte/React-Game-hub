
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/UseGames.ts";
import {GameCard} from "./GameCard.tsx";
import {GameCardSkeleton} from "./gameCardSkeleton.tsx";


export const GamesGrid = () => {
    const {games, error, isLoading} = useGames()
    const skelGames = [1,2,3,4,5,6,7,8,9]

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={'10px'}>
                {isLoading &&
                    skelGames.map(skel => (<GameCardSkeleton key={skel}/>))
                }
                {games.map((game) => (<GameCard key={game.id} game={game} />))}
            </SimpleGrid>
        </>
    );
};
