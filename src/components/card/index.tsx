import { Box, Image, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Card() {
    return (
        <Box cursor='pointer'>
            <Link href='/game'>

                <VStack rounded='16px' minW='240px' overflow='hidden' bg='brand.200'>
                    <Image src='/assets/game.png' alt='' />
                    <VStack p='16px'>
                        <Text fontWeight='700' fontSize='18px'>Game name</Text>
                        <Text>Game description</Text>
                    </VStack>
                </VStack>
            </Link>
        </Box>
    )
}
