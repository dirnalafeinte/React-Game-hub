import {HStack} from "@chakra-ui/react";
import newLogo from '../assets/newLogo.webp'
import {ThemeColorSwitch} from "./ThemeColorSwitch.tsx";
import {SearchBar} from "./SearchBar.tsx";

export function NavBar() {
    return (
        <>
            <HStack justifyContent={'space-evenly'} padding={'10px'}>
                <img src={newLogo} alt="Logo" width="60px" style={{ borderRadius: '40%' }}/>
                <SearchBar/>
                <ThemeColorSwitch/>
            </HStack>
        </>
    );
}
