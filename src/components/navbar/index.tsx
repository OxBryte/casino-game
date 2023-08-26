import { Box, Flex, Text, IconButton, useDisclosure, ListItem, VStack, UnorderedList, useBreakpointValue, Button, HStack, Center } from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'
import Logo from '../assets/theNoogles2.png'
import { Fade } from 'react-reveal'
import { useRouter } from "next/router";
import Image from 'next/image'
import { FaDiscord, FaFileAlt, FaFootballBall, FaTwitter } from 'react-icons/fa'
import { BsXLg } from "react-icons/bs";
import ContainLayout from '../page-layout/container'
import { MdCasino } from 'react-icons/md'

const Navbar = () => {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onToggle } = useDisclosure()
  const [ToggleNav, setToggleNav] = React.useState(false)
  return (
    <Fade top>
      {isDesktop ? (
        <>
        <Center w='full' py='12px' bg='brand.100'>Lorem ipsum dolor sit amet consectetur adipisicing </Center>
          <Box as="nav" py='22px' backdropBlur='blur(20px)' bg='brand.200'>
            <ContainLayout>
              <Flex justify="space-between" align="center">
                <HStack align='center' gap='10px'>
                  <Button bg='brand.100' rounded='10px' fontWeight='500' fontSize='12px' border='1px' borderColor='whiteAlpha.300' _hover={{ bg: 'brand.200', borderColor: 'white' }} gap='10px' alignItems='center'> <FaFootballBall /> Sport</Button>
                  <Button bg='brand.100' rounded='10px' fontWeight='500' fontSize='12px' border='1px' borderColor='whiteAlpha.300' _hover={{ bg: 'brand.200', borderColor: 'white' }} gap='10px' alignItems='center'><MdCasino /> Casino</Button>
                  <Link href="/">
                    {/* <Image src={Logo} alt="" width={70} /> */}
                    <Text>Logo</Text>
                  </Link>
                </HStack>

                <Flex alignItems="center" justify='center' flexDirection="row" gap='20px'>
                  <Button bg='brand.300' rounded='10px' fontWeight='500' fontSize='12px' _hover={{ bg: 'brand.200' }}>Connect wallet</Button>
                </Flex>
              </Flex>
            </ContainLayout>
          </Box>
        </>
      ) : (
        <Box>
          {ToggleNav ? (
            <Flex flexDir='column' gap='50px' w='100%' py='10px' pb='20px' px={4} color='white' bg='brand.200' h='100vh'>
              <Flex align='center' justify='space-between'>
                <Link href="/">
                    <Text>Logo</Text>
                </Link>
                {ToggleNav ? (
                  <IconButton
                    onClick={() => { setToggleNav(false) }}
                    variant="unstyled"
                    display='flex'
                    justifyContent='center'
                    icon={<BsXLg fontSize="1.25rem" />}
                    aria-label="Open Menu"
                  />
                ) : (
                  <IconButton
                    onClick={() => { setToggleNav(true) }}
                    variant="unstyled"
                    display='flex'
                    justifyContent='center'
                    icon={<FiMenu fontSize="1.5rem" />}
                    aria-label="Open Menu"
                  />
                )}
              </Flex>
            </Flex>
          ) : (
            <Box as="nav" px={{ base: '4', md: '8', lg: '12' }} py='10px' bg='brand.200'>
              <Flex justify='space-between' align='center'>
                <Link href="/">
                  <Image src={Logo} alt="" width={70} />
                </Link>
                {ToggleNav ? (
                  <IconButton
                    onClick={() => { setToggleNav(false) }}
                    variant="unstyled"
                    icon={<BsXLg fontSize="1.25rem" />}
                    aria-label="Open Menu"
                  />
                ) : (
                  <IconButton
                    onClick={() => { setToggleNav(true) }}
                    variant="unstyled"
                    icon={<FiMenu fontSize="1.5rem" />}
                    aria-label="Open Menu"
                  />
                )}
              </Flex>
            </Box>)
          }
        </Box>
      )}

    </Fade>
  );
}

export default Navbar;