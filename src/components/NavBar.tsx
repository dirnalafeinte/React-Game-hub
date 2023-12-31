import {HStack, Text} from "@chakra-ui/react";
import logo from '../assets/logo.webp'

export function NavBar() {
    return (
        <>
            <HStack>
                <img src={logo} alt="Logo" width="60px"/>
                <Text>NavBar</Text>
            </HStack>
        </>
    );
}
