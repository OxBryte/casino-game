import { Box, Flex, Text, IconButton, useDisclosure, ListItem, VStack, UnorderedList, useBreakpointValue, Button } from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'
import Logo from '../assets/theNoogles2.png'
import { Fade } from 'react-reveal'
import { useRouter } from "next/router";
import Image from 'next/image'
import { FaDiscord, FaFileAlt, FaTwitter } from 'react-icons/fa'
import { BsXLg } from "react-icons/bs";
import ContainLayout from '../page-layout/container'

const Navbar = () => {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onToggle } = useDisclosure()
  const [ToggleNav, setToggleNav] = React.useState(false)
  return (
    <Fade top>
      {isDesktop ? (
        <Box as="nav" px={{ base: '5', md: '8', lg: '12' }} py='22px' backdropBlur='blur(20px)'>
          <ContainLayout>
            <Flex justify="space-between" align="center">
              {/* <Link href="/">
              <Image src={Logo} alt="" width={70} />
            </Link> */}
              <UnorderedList
                listStyleType="none"
                gap="25px"
                justifyContent="space-between"
                display={{ base: "flex", md: "flex" }}
                fontSize='12px'
              >
                <ListItem _hover={{ fontWeight: "700" }} >
                  <Link href="/timemap">HOME</Link>
                </ListItem>
                <ListItem _hover={{ fontWeight: "700" }}>
                  <Link href="/about">ABOUT NOOGIES</Link>
                </ListItem>
                <ListItem _hover={{ fontWeight: "700" }}>
                  <Link href="/">CONTACT</Link>
                </ListItem>
                <ListItem _hover={{ fontWeight: "700" }}>
                  <Link href="/vision">FAQS</Link>
                </ListItem>
              </UnorderedList>
              <Flex alignItems="center" justify='center' flexDirection="row" gap='20px'>

                <Link href='https://twitter.com/thenoogiesnft/' >
                  <FaTwitter size={20} />
                </Link>
                <Link href='https://discord.gg/thenoogiesnft'>
                  <FaDiscord size={20} />
                </Link>
                <Button bg='goldenrod' rounded='10px' fontSize='12px' _hover={{ bg: 'gold' }}>Connect wallet</Button>

                {/* {isOpen ? (
                <IconButton
                  onClick={onToggle}
                  variant="unstyled"
                  display='flex'
                  justifyContent='center'
                  icon={<BsXLg fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              ) : (
                <IconButton
                  onClick={onToggle}
                  variant="unstyled"
                  display='flex'
                  justifyContent='center'
                  icon={<FiMenu fontSize="1.5rem" />}
                  aria-label="Open Menu"
                />
              )} */}

                {/* {isOpen && (
                <VStack position="absolute" top="60px" mr="20px">
                  <Link href='/'>
                    <Flex border="1px" borderColor="white" p="10px" color="white" rounded="md" gap="7px" justify='space-between' align="center" width="100px" cursor="pointer" _hover={{ bg: "white", borderColor: 'white', color: "#000" }}>
                      <Text fontSize="10px">Whitepaper</Text>
                      <FaFileAlt />
                    </Flex>
                  </Link>
                  <Link href='/' >
                    <Flex border="1px" borderColor="white" p="10px" color="white" rounded="md" gap="7px" justify='space-between' align="center" width="100px" cursor="pointer" _hover={{ bg: "white", borderColor: 'white', color: "#000" }}>
                      <Text fontSize="10px">Twitter</Text>
                      <FaTwitter />
                    </Flex>
                  </Link>
                  <Link href=''>
                    <Flex border="1px" borderColor="white" p="10px" color="white" rounded="md" gap="7px" justify='space-between' align="center" width="100px" cursor="pointer" _hover={{ bg: "white", borderColor: 'white', color: "#000" }}>
                      <Text fontSize="10px">Discord</Text>
                      <FaDiscord />
                    </Flex>
                  </Link>
                </VStack>
              )} */}
              </Flex>
            </Flex>
          </ContainLayout>
        </Box>
      ) : (
        <Box>
          {ToggleNav ? (
            <Flex flexDir='column' gap='50px' w='100%' py='10px' pb='20px' px={4} color='white' bg='#000' h='100vh'>
              <Flex align='center' justify='space-between'>
                <Link href="/">
                  <Image src={Logo} alt="" width={70} />
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
              <Flex flexDir='column' align='left' gap='20px' color='white' fontSize={25} fontWeight={700}>
                <Link href='/timemap'>
                  <Text py='2' px='1' cursor='pointer' _hover={{ color: 'whiteAlpha.500' }}>Timemap</Text>
                </Link>
                <Link href='/about'>
                  <Text py='2' px='1' cursor='pointer' _hover={{ color: 'whiteAlpha.500' }}>About</Text>
                </Link>
                <Link href='/'>
                  <Text py='2' px='1' cursor='pointer' _hover={{ color: 'whiteAlpha.500' }}>Noogies</Text>
                </Link>
                <Link href='/vision'>
                  <Text py='2' px='1' cursor='pointer' _hover={{ color: 'whiteAlpha.500' }}>Vision</Text>
                </Link>
                <Link href='/'>
                  <Text py='2' px='1' cursor='pointer' _hover={{ color: 'whiteAlpha.500' }}>Whitepaper</Text>
                </Link>
                <Link href='https://twitter.com/thenoogiesnft/' target='_blank'>
                  <Text py='2' px='1' cursor='pointer' _hover={{ color: 'whiteAlpha.500' }}>Twitter</Text>
                </Link>
                  <Link href='https://discord.gg/thenoogiesnft' target='_blank'>
                  <Text py='2' px='1' cursor='pointer' _hover={{ color: 'whiteAlpha.500' }}>Discord(coming soon)</Text>
                </Link>
                <Box opacity='0.1'>
                  <Image src={Logo} alt="" width={350} />
                </Box>
              </Flex>
            </Flex>
          ) : (
            <Box as="nav" px={{ base: '4', md: '8', lg: '12' }} py='10px' bg='blackAlpha.800'>
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