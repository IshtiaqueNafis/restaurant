import React from 'react';
import {Box, Center, HStack, Icon, IconButton, StatusBar, Text} from "native-base";


const AppBar = () => {
    return (
        <Center>
            <StatusBar bg="#3700B3" barStyle="light-content"/>
            <Box safeAreaTop bg="violet.600"/>
            <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%"
                    maxW="350">
                <HStack alignItems="center">
                    <IconButton icon={<Icon size="sm" name="menu" color="white"/>}/>
                    <Text color="white" fontSize="20" fontWeight="bold">
                        Home
                    </Text>
                </HStack>

            </HStack>
        </Center>
    );
};

export default AppBar;
