import { Box, Center, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsGridFill } from 'react-icons/bs'
import CardComp from '../card'
import Games from './games'

export default function MainLayout() {
    return (
        <VStack gap='40px' w='full'>
            <Games title='Games' />
            <Games title='Casino' />
            <Games title='Sports' />
        </VStack>
    )
}
