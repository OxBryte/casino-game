import { Box, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function CardComp() {
    return (
        <Box>
            <VStack rounded='16px' minW='240px' overflow='hidden' bg='brand.200'>
                <Image src='/assets/game.png' alt='' />
                <VStack p='16px'>
                    <Text fontWeight='700' fontSize='18px'>Game name</Text>
                    <Text>Game description</Text>
                </VStack>
            </VStack>
        </Box>
    )
}
