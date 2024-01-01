import {Card, CardBody, Image, Heading, HStack} from '@chakra-ui/react'
import {Game} from "../hooks/UseGames.ts";
import {PlatformIcons} from "./PlatformIcons.tsx";
import {MetaCritic} from "./MetaCritic.tsx";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    game: Game,
}

export const GameCard = ({game} : Props) => {


    return (
        <>
            <Card maxW={'sm'}>
                <Image src={getCroppedImageUrl(game.background_image)} borderRadius='lg'/>
                <CardBody>
                    <Heading size='md'>{game.name}</Heading>
                    <HStack justifyContent={'space-between'}>
                        <PlatformIcons platforms={game.parent_platforms.map(p => p.platform)}/>
                        <MetaCritic metacritic={game.metacritic}/>
                    </HStack>
                </CardBody>
            </Card>
        </>
    );
};
