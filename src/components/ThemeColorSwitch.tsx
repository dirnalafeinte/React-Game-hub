import {HStack, Switch, Text, useColorMode} from '@chakra-ui/react'


export const ThemeColorSwitch = () => {

    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <>
            <HStack>
                <Switch isChecked={colorMode === 'dark'} id='Dark mode' colorScheme={'green'} onChange={toggleColorMode}></Switch>
                <Text whiteSpace={'nowrap'}>Dark Mode</Text>
            </HStack>
        </>
    );
};
