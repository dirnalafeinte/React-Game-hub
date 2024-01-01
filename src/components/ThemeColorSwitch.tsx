import {HStack, Switch, Text, useColorMode} from '@chakra-ui/react'


export const ThemeColorSwitch = () => {
    // Here's the signature
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <>
            <HStack>
                <Switch isChecked={colorMode === 'dark'} id='Dark mode' colorScheme={'green'} onChange={toggleColorMode}></Switch>
                <Text>Dark Mode</Text>
            </HStack>
        </>
    );
};
