import useGenres from "../hooks/UseGenres.ts";


export const GenreList = () => {
    const {genres} = useGenres()

    return (
        <ul>
            {genres.map((genre) => (
                <li key={genre.id}>
                    {genre.name}
                </li>
            ))}
        </ul>

    );
};
