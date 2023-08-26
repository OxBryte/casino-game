import { Box, Divider, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsCaretDownFill } from 'react-icons/bs'

export default function SideBar() {
    return (
        <Box w='220px' p='16px' mt='20px' rounded='12px' fontSize={14} border='1px' borderColor='whiteAlpha.200' bg='brand.100' h='70vh' position='sticky' top='20px'>
            <VStack w='full' align='left' mb='20px'>
                <Flex justify='space-between' align='center' color='brand.300' rounded='8px' p='12px' w='full' _hover={{ bg: 'brand.200', color: 'white' }} cursor='pointer'>
                    <Text>Sport</Text>
                    <Box p='6px' rounded='30%'><BsCaretDownFill /></Box>
                </Flex>
                <Flex justify='space-between' align='center' color='brand.300' rounded='8px' p='12px' w='full' _hover={{ bg: 'brand.200', color: 'white' }} cursor='pointer'>
                    <Text>Bonus War</Text>
                    <Box p='6px' rounded='30%'><BsCaretDownFill /></Box>
                </Flex>
                <Flex justify='space-between' align='center' color='brand.300' rounded='8px' p='12px' w='full' _hover={{ bg: 'brand.200', color: 'white' }} cursor='pointer'>
                    <Text>Earn</Text>
                    <Box p='6px' rounded='30%'><BsCaretDownFill /></Box>
                </Flex>
                <Flex justify='space-between' align='center' color='brand.300' rounded='8px' p='12px' w='full' _hover={{ bg: 'brand.200', color: 'white' }} cursor='pointer'>
                    <Text>Poker</Text>
                    <Box p='6px' rounded='30%'><BsCaretDownFill /></Box>
                </Flex>
                <Flex justify='space-between' align='center' color='brand.300' rounded='8px' p='12px' w='full' _hover={{ bg: 'brand.200', color: 'white' }} cursor='pointer'>
                    <Text>Lottery</Text>
                    <Box p='6px' rounded='30%'><BsCaretDownFill /></Box>
                </Flex>
            </VStack>
            <Divider />
            <VStack w='full' align='left' mt='20px'>
                <Flex justify='space-between' align='center' color='brand.300' rounded='8px' p='12px' w='full' _hover={{ bg: 'brand.200', color: 'white' }} cursor='pointer'>
                    <Text>Live Support</Text>
                </Flex>
                <Flex justify='space-between' align='center' color='brand.300' rounded='8px' p='12px' w='full' _hover={{ bg: 'brand.200', color: 'white' }} cursor='pointer'>
                    <Text>Logout</Text>
                </Flex> 
            </VStack>
        </Box>
    )
}
