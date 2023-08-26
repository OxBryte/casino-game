import { Box, Center, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsGridFill } from 'react-icons/bs'
import CardComp from '../card'

export default function Games({title}) {
    return (
        <Box>
            <VStack w='full'>
                <Flex align='center' justify='space-between' w='full' p='20px' rounded='12px' bg='brand.200'>
                    <Text>{title}</Text>
                    <BsGridFill />
                </Flex>
                <SimpleGrid columns={[1, 2, 3, 4]} gap='20px' w='full'>
                    <CardComp />
                    <CardComp />
                    <CardComp />
                    <CardComp />
                </SimpleGrid>
            </VStack>
        </Box>
    )
}
