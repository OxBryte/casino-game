import PageLayout from '../src/components/page-layout';
import ContainLayout from '../src/components/page-layout/container';
import { Box, Stack, Heading, Text, VStack, Flex, HStack, useBreakpointValue, Button, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import { Zoom, Fade } from 'react-reveal'
import Image from 'next/image';
import Logo from '../src/components/assets/theNoogles2.png'
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';
import SideBar from '../src/components/sideBar';


export default function Home() {

  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true })

  return (
    <Box>
      <PageLayout title='Home' description='' footer={true} navbar={true} >
        <Box h='max-content' w='full' position='relative'>
          <ContainLayout>
            <SideBar />
          </ContainLayout>
        </Box>
      </PageLayout>
    </Box>

  );
}
