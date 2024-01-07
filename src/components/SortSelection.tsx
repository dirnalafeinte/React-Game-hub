import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import {BsChevronDown} from "react-icons/bs";

interface Props {
    handleSelection: (order: string) => void,
    selectedSort: string
}

export const SortSelection = ({handleSelection, selectedSort} : Props) => {

    const sortOrder = [
        {value: '', label: "Relevance"},
        {value: '-added', label: "Date added"},
        {value: 'name', label: "Name"},
        {value: '-released', label: "Release date"},
        {value: '-metacritic', label: "Popularity"},
        {value: '-rating', label: "Average rating"}
    ]

    const currentSortOrder = sortOrder.find(sort => sort.value === selectedSort)

    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    Order By : {currentSortOrder ? currentSortOrder.label : 'Relevance'}
                </MenuButton>
                <MenuList>
                    {sortOrder.map(order => <MenuItem key={order.value} onClick={() => handleSelection(order.value)} value={order.value}>{order.label}</MenuItem>)}
                </MenuList>
            </Menu>
        </>
    );
};