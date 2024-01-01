import useGenres, {Genre} from "../hooks/UseGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";


interface Props {
    handleGenre: (genre : Genre) => void
    selectedGenre: Genre | null
}

export const GenreList = ({handleGenre, selectedGenre} : Props) => {
    const {data, isLoading} = useGenres()

    if (isLoading) return <Spinner/>;

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id}>
                    <HStack>
                        <Image boxSize={'50px'} borderRadius={20} padding={'10px'}
                               src={getCroppedImageUrl(genre.image_background)}/>
                        <Button
                            fontWeight={genre.slug === selectedGenre?.slug ? 'bold' : 'normal'}
                            fontSize={'lg'}
                            variant={'link'}
                            onClick={() => handleGenre(genre)}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};
