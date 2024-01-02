import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import {BsSearch} from "react-icons/bs";

export const SearchBar = () => {
    return (
        <InputGroup>
            <InputLeftElement marginX={5} children={<BsSearch/>} />
            <Input placeholder='Search...' borderRadius={20} marginX={5}/>
        </InputGroup>
    );
};
