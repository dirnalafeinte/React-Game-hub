import {useEffect, useState} from "react";
import apiClient from "../services/apiClient.ts";
import {Text} from "@chakra-ui/react";

interface Game {
    id: number,
    name: string
}

interface FetchingGames {
    count: number,
    results: Game[]
}

export const GamesGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState([])

    useEffect(() => {
        apiClient.get<FetchingGames>('/games')
            .then(response => setGames(response.data.results))
            .catch(error => setError(error.message))
    })

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
};
