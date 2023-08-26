import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#0C0F15', '#0C0F15')(props),
      color: '#fff'
    },
  }),
};

const colors = {
  brand: {
    100: '#0C0F15',
    200: '#11151D',
    300: '#536079',
    // 300: '#b46ef7',
    // 400: '#9a4ce7',
    // 500: '#7e31ce',
    // 600: '#641eab',
    // 700: '#4b1483',
    // 800: '#341158',
    // 900: '#1e0d2d',
  },
  brandbg: {
    100: '#EDEBFF',
  }
};

const fonts = {
  heading: `Montserrat, ${base.fonts.heading}`,
};

const components = {
  Button: {
    
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
