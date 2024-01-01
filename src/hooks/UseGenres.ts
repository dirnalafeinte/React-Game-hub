
import useData from "./UseData.ts";


export interface Genre {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    background_image: string
}


const useGenres = () => useData<Genre>('/genres')

export default useGenres;