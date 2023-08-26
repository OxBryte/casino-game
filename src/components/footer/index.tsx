import {Box, Button, Flex, Text, Stack, VStack, List, ListItem, HStack, Divider, ButtonGroup, } from '@chakra-ui/react'
import * as React from 'react'
import {MdEmail} from 'react-icons/md'
import { FaDiscord, FaTwitter, FaMedium } from 'react-icons/fa';
// import { LogoIcon } from '../icons/Logo';
import ContainLayout from '../page-layout/container';
  
const Footer = () => {
    return (
        <ContainLayout pt={24}>
            <Flex align="center" justify='center' px={{ base: '10px', md: '0'}}>
                <Stack spacing='60px' width='100%'>
                    <Box>
                        <Text mb={5} textAlign='center' fontSize={{ base: '24px', md: '32px', lg: '40px' }} fontWeight='700' >Inhale. Exhale. Rethink.</Text>
                        {/* <Text fontWeight='400' fontSize='14px' textAlign='center' px={{base: '5', md: '100', lg: '350'}}>We’re a diverse and passionate team that is working towards building the future of recruitment and bridging the gap between Web2 and Web3</Text> */}
                    </Box>
                    <Box>
                        <Stack direction={['column', 'row']} justify='space-between' spacing={10}>
                            <VStack align={['center', 'flex-start']} spacing={5}>
                                <Box as='a' href="/">
                                    {/* <LogoIcon cursor="pointer" w={['40%', 40]} /> */}
                                </Box>
                                <ButtonGroup>
                                <Box as='a' href='#jobs' scroll-behavior='smooth'><Button variant='solid' px={7} bg='brand.100' color='white' borderWidth= "1px" rounded='full' scrollBehavior='smooth' _hover={{ borderColor: 'brand.100', borderWidth: "1px", color: 'brand.100', bg: 'none' }}>Find a job</Button></Box>
                                <Box as='a' href='/enter-job-details'><Button variant='solid' px={7} color="brand.100" bg="white" borderColor="brand.100" borderWidth="1px" rounded='full' _hover={{ bg: 'brand.100', color: 'white'}}>Post a job</Button></Box>
                                </ButtonGroup>
                            </VStack>
                            <Stack direction={['row']} spacing={10} justify='space-around'>
                                {/* <List display='flex' flexDirection='column' gap='10px'>
                                    <ListItem fontWeight='600' fontSize={{ base: '14px', sm: '16px', }} color='#0A142F'>Explore</ListItem>
                                    <Box as='a' href='/enter-job-details'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Post a job</ListItem></Box>
                                    <Box as='a' href='/'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer' scrollBehavior='smooth'>Find a job</ListItem></Box>
                                </List> */}
                                <List display='flex' flexDirection='column' gap='10px'>
                                    <ListItem fontWeight='600' fontSize={{ base: '14px', sm: '16px', }} color='#0A142F'>Resources</ListItem>
                                    <Box as='a' href='https://rethinkable.gitbook.io/rethinkable/products/connect' target='_blank'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Discord bot</ListItem></Box>
                                    <Box as='a' href='https://discord.gg/rethinkable' target='_blank'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Support</ListItem></Box>
                                </List>
                                <List display='flex' flexDirection='column' gap='10px'>
                                    <ListItem fontWeight='600' fontSize={{ base: '14px', sm: '16px', }} color='#0A142F'>Company</ListItem>
                                    <Box as='a' href="https://rethinkable.gitbook.io/rethinkable/" target='_blank'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>About us</ListItem></Box>
                                    <Box as='a' href="mailto:hello@rethinkable.xyz" target='_blank'><ListItem fontWeight='400' fontSize={{ base: '14px', sm: '16px', }} opacity='0.5' cursor='pointer'>Contact us</ListItem></Box>
                                </List>
                            </Stack>
                        </Stack>
                    </Box>
                    <Divider />
                    <Stack justify='space-between' align='center' gap='5' direction={['column', 'row' ]}>
                        <Text fontSize={{ base: '12px', sm: '14px', }} fontWeight='500' >© 2022 Rethinkable. All Rights Reserved.</Text>
                        <HStack spacing='20px'>
                            <Box rounded='full' border='1px' p='2' _hover={{color: 'white', bg: 'brand.100'}}>
                            <Box as='a' href='https://discord.gg/rethinkable' target='_blank'><FaDiscord size={20} cursor='pointer'/></Box>
                            </Box>
                            <Box rounded='full' border='1px' p='2' _hover={{color: 'white', bg: 'brand.100'}}>
                                <Box as='a' href='https://twitter.com/rethinkablexyz' target='_blank'><FaTwitter size={20} cursor='pointer'/></Box>
                            </Box>
                            <Box rounded='full' border='1px' p='2' _hover={{color: 'white', bg: 'brand.100'}} cursor='pointer'>
                                <Box as='a' href='https://medium.com/@rethinkablexyz' target='_blank'><FaMedium size={20} /></Box>
                            </Box>
                            <Box rounded='full' border='1px' p='2' _hover={{color: 'white', bg: 'brand.100'}} cursor='pointer'>
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