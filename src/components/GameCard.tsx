import {Card, CardBody, Image, Heading} from '@chakra-ui/react'
import {Game} from "../hooks/UseGames.ts";
import {PlatformIcons} from "./PlatformIcons.tsx";

interface Props {
    game: Game,
}

export const GameCard = (props : Props) => {

    return (
        <>
            <Card maxW={'sm'}>
                <Image src={props.game.background_image} borderRadius='lg'/>
                <CardBody>
                    <Heading size='md'>{props.game.name}</Heading>
                    <PlatformIcons platforms={props.game.parent_platforms.map(p => p.platform)}/>
                </CardBody>
            </Card>
        </>
    );
};
