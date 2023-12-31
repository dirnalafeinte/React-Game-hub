import {HStack} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import {ThemeColorSwitch} from "./ThemeColorSwitch.tsx";

export function NavBar() {
    return (
        <>
            <HStack justifyContent={'space-between'} padding={'10px'}>
                <img src={logo} alt="Logo" width="60px"/>
                <ThemeColorSwitch/>
            </HStack>
        </>
    );
}
