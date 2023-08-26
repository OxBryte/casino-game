import PageLayout from '../src/components/page-layout';
import ContainLayout from '../src/components/page-layout/container';
import { Box, Stack, Heading, Text, VStack, Flex, HStack, useBreakpointValue, Button, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import { Zoom, Fade } from 'react-reveal'
import Image from 'next/image';
import Logo from '../src/components/assets/theNoogles2.png'
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';


export default function Home() {

  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true })

  return (
    <Box className=''>
      <PageLayout title='Home' description='' footer={true} navbar={true} >
        <ContainLayout>
          <Stack direction={['column', 'row']} spacing={['1rem', '10rem']} p={['1rem', '3rem']} align='center' justify='space-between'>
            
          </Stack>
        </ContainLayout>
      </PageLayout>
    </Box>

  );
}
