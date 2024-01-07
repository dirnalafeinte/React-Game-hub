import useGenres, {Genre} from "../hooks/UseGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";


interface Props {
    handleGenre: (genre : Genre) => void
    selectedGenre: Genre | null
}

export const GenreList = ({handleGenre, selectedGenre} : Props) => {
    const {data, isLoading} = useGenres()

    if (isLoading) return <Spinner/>;

    return (
        <>
            <Heading padding={5} fontSize={'2xl'}>Genres</Heading>
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id}>
                    <HStack>
                        <Image boxSize={'50px'} borderRadius={20} padding={'10px'} objectFit={'cover'}
                               src={getCroppedImageUrl(genre.image_background)}/>
                        <Button
                            whiteSpace={'normal'}
                            textAlign={'left'}
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
        </>
    );
};
