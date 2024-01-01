import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

export const GameCardSkeleton = () => {

    return (
        <Card maxW={'sm'} width={'400px'} borderRadius={10}>
            <Skeleton height={'250px'}/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    );
};
