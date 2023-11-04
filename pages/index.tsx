import PageLayout from "../src/components/page-layout";
import ContainLayout from "../src/components/page-layout/container";
import { Box, Flex, Text } from "@chakra-ui/react";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../src/components/assets/theNoogles1.png";
import Home from "./home";

export default function Index() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    // <PageLayout title='Home' description='My Boilerplate' footer={false} navbar={false} >
    // <ContainLayout>
    <Box>
      {loading ? (
        <Flex
          direction="column"
          alignItems="center"
          justify="center"
          h="100vh"
          gap={3}
          className='loader-container'
        >
          <ClipLoader color="#fff" loading={loading} size="20" />
        </Flex>
      ) : (
        <Box>
          <Home />
        </Box>
      )}
      {/* <Home /> */}
    </Box>
    // </ContainLayout>
    // </PageLayout>
  );
}
