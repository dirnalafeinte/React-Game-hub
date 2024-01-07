import {HStack} from "@chakra-ui/react";
import newLogo from '../assets/newLogo.webp'
import {ThemeColorSwitch} from "./ThemeColorSwitch.tsx";
import {SearchBar} from "./SearchBar.tsx";

interface Props {
    onSearch: (value: string) => void;
}

export function NavBar({onSearch}: Props) {
    return (
        <>
            <HStack justifyContent={'space-evenly'} padding={'10px'}>
                <img src={newLogo} alt="Logo" width="60px" style={{ borderRadius: '40%' }}/>
                <SearchBar onSearch={onSearch}/>
                <ThemeColorSwitch/>
            </HStack>
        </>
    );
}
