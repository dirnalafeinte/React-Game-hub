import {HStack, Switch, Text, useColorMode} from '@chakra-ui/react'


export const ThemeColorSwitch = () => {
    // Here's the signature
    const { toggleColorMode } = useColorMode()

    return (
        <>
            <HStack>
                <Switch id='Dark mode' colorScheme={'green'} onChange={toggleColorMode}></Switch>
                <Text>Dark Mode</Text>
            </HStack>
        </>
    );
};
