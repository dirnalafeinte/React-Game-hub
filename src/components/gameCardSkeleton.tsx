import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

export const GameCardSkeleton = () => {

    return (
        <Card maxW={'sm'} borderRadius={10}>
            <Skeleton height={'250px'}/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    );
};
