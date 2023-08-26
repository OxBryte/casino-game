// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import '../internationalization/i18n'
import theme from '../src/theme'
import { Montserrat } from '@next/font/google' 

const montserrat = Montserrat ({
  subsets: ['latin']
})


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <main className={montserrat.className}>
      {/* <Head></Head> */}
      <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
};

export default App