import { Box, Button, Flex, Text, Stack, VStack, List, ListItem, HStack, Divider, ButtonGroup, } from '@chakra-ui/react'
import * as React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaDiscord, FaTwitter, FaMedium } from 'react-icons/fa';
// import { LogoIcon } from '../icons/Logo';
import ContainLayout from '../page-layout/container';

const Footer = () => {
    return (
        <ContainLayout pt={24}>
            <Flex align="center" justify='center' px={{ base: '10px', md: '0' }}>
                <Stack spacing='60px' width='100%'>
                    <Box>
                        <Stack direction={['column', 'row']} justify='space-between' spacing={10}>
                            <VStack align={['center', 'flex-start']} spacing={5}>
                                <Text maxW='320px'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem, fugiat doloremque, adipisci deleniti deserunt voluptate.
                                </Text>
                                <Box as='a' href=''><Button variant='solid' px={7} color="brand.100" bg="white" borderColor="brand.100" borderWidth="1px" rounded='full' _hover={{ bg: 'brand.100', color: 'white' }}>Learn more</Button></Box>
                            </VStack>
                            <Stack direction={['row']} spacing={10} justify='space-around'>
                                <List display='flex' flexDirection='column' gap='10px'>
                                    <ListItem fontWeight='600' fontSize={{ base: '14px', sm: '16px', }}>Explore</ListItem>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                </List>
                                <List display='flex' flexDirection='column' gap='10px'>
                                    <ListItem fontWeight='600' fontSize={{ base: '14px', sm: '16px', }}>Resources</ListItem>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                </List>
                                <List display='flex' flexDirection='column' gap='10px'>
                                    <ListItem fontWeight='600' fontSize={{ base: '14px', sm: '16px', }}>Company</ListItem>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                    <Box as='a' href=''><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Lorem Ipsum</ListItem></Box>
                                </List>
                            </Stack>
                        </Stack>
                    </Box>
                    <Divider />
                    <Stack justify='space-between' align='center' py='12px' gap='5' direction={['column', 'row']}>
                        <Text fontSize={{ base: '12px', sm: '14px', }} fontWeight='500' >© 2023Casino. All Rights Reserved.</Text>
                        <HStack spacing='20px'>
                            <Box rounded='full' border='1px' p='2' _hover={{ color: 'white', bg: 'brand.100' }}>
                                <Box as='a' href='https://discord.gg/rethinkable' target='_blank'><FaDiscord size={20} cursor='pointer' /></Box>
                            </Box>
                            <Box rounded='full' border='1px' p='2' _hover={{ color: 'white', bg: 'brand.100' }}>
                                <Box as='a' href='https://twitter.com/rethinkablexyz' target='_blank'><FaTwitter size={20} cursor='pointer' /></Box>
                            </Box>
                            <Box rounded='full' border='1px' p='2' _hover={{ color: 'white', bg: 'brand.100' }} cursor='pointer'>
                                <Box as='a' href='https://medium.com/@rethinkablexyz' target='_blank'><FaMedium size={20} /></Box>
                            </Box>
                            <Box rounded='full' border='1px' p='2' _hover={{ color: 'white', bg: 'brand.100' }} cursor='pointer'>
                                <Box as='a' href='mailto:hello@rethinkable.xyz' target='_blank'><MdEmail size={20} /></Box>
                            </Box>
                        </HStack>
                    </Stack>
                </Stack>
            </Flex>
        </ContainLayout>
    )
}

export default Footer;