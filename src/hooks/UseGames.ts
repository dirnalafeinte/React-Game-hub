import useData from "./UseData.ts";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

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


const useGames = (selectedGenre : Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.slug}}, [selectedGenre?.slug])

export default useGames