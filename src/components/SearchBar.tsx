import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

interface Props {
    onSearch: (value: string) => void;
}

export const SearchBar = ({onSearch}: Props) => {

    const ref = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value)
        }}>
            <InputGroup>
                <InputLeftElement marginX={5} children={<BsSearch/>} />
                <Input ref={ref} placeholder='Search...' borderRadius={20} marginX={5}/>
            </InputGroup>
        </form>
    );
};
