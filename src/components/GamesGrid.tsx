
import {SimpleGrid, Text} from "@chakra-ui/react";
import {GameCard} from "./GameCard.tsx";
import {GameCardSkeleton} from "./gameCardSkeleton.tsx";
import {Genre} from "../hooks/UseGenres.ts";
import {Platform} from "../hooks/UsePlatform.ts";
import useGames from "../hooks/UseGames.ts";

interface Props {
    selectedGenre: Genre | null
    selectedPlatform: Platform | null
    selectedOrder: string
}

export const GamesGrid = ({selectedGenre, selectedPlatform, selectedOrder} : Props) => {
    const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform, selectedOrder)
    const skelGames = [1,2,3,4,5,6,7,8,9]


    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={'10px'}>
                {isLoading &&
                    skelGames.map(skel => (<GameCardSkeleton key={skel}/>))
                }
                {data.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
};
