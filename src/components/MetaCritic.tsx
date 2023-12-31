import {Badge} from "@chakra-ui/react";

interface Props {
    metacritic: number
}
export const MetaCritic = ({metacritic} : Props) => {

    let color = '';

    if (metacritic >= 75) {
        color = 'green';
    } else if (metacritic >= 60) {
        color = 'yellow';
    } else {
        color = 'red';
    }

    return (
        <Badge colorScheme={color} p={2} borderRadius="md">
            {metacritic}
        </Badge>
    );
};
