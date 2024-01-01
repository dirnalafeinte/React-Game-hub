import {useEffect, useState} from "react";
import apiClient from "../services/apiClient.ts";
import {CanceledError} from "axios";


export interface Genre {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    background_image: string
}

interface FetchingGenres {
    count: number,
    results: Genre[]
}


const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState([])

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchingGenres>('/genres', {signal: controller.signal})
            .then(response => {
                setGenres(response.data.results)
            })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message)
            })

        return () => controller.abort()
    }, [])

    return {genres, error}
}

export default useGenres;