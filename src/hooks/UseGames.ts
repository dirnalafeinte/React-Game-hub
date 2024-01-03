import useData from "./UseData.ts";
import {Platform} from "./UsePlatform.ts";

interface Genre {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms : { platform: Platform }[],
    genres: Genre[],
    metacritic: number
}


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, selectedOrder: string) =>
    useData<Game>('/games', {
        params: {
            genres: selectedGenre?.slug,
            platforms: selectedPlatform?.id,
            ordering: selectedOrder
        }
    }, [selectedGenre?.slug, selectedPlatform?.id, selectedOrder]);

export default useGames