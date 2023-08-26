import { Box, Center, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsGridFill } from 'react-icons/bs'
import Card from '../card'

export default function Games({title}) {
    return (
        <Box>
            <VStack gap='20px' w='full'>
                <Flex align='center' justify='space-between' w='full' p='20px' rounded='12px' bg='brand.200'>
                    <Text>{title}</Text>
                    <BsGridFill />
                </Flex>
                <SimpleGrid columns={[1, 2, 3, 4]} gap='20px' w='full'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </SimpleGrid>
            </VStack>
        </Box>
    )
}
