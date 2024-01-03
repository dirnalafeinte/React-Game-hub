import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import usePlatforms, {Platform} from "../hooks/UsePlatform.ts";
import {BsChevronDown} from "react-icons/bs";

interface Props {
    handleSelection: (platform: Platform) => void,
    selectedPlatform: Platform | null
}

export const PlatformSelection = ({ handleSelection, selectedPlatform }: Props) => {

    const {data} = usePlatforms()


    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    {selectedPlatform?.name || "Platfroms"}
                </MenuButton>
                    <MenuList>
                        {data.map(platform => <MenuItem onClick={() => handleSelection(platform)} key={platform.id}>{platform.name}</MenuItem>)}
                    </MenuList>
            </Menu>
        </>
    );
};
