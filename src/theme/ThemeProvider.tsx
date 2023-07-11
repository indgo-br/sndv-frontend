import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: {
      main: '#E89900',
      light: '#FFECCC',
      dark: '#AB8B67',
    },
    background: {
      primary: '#FFF8EE',
      gray: '#DFE0DF',
    },
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

type Props = {
  children: React.ReactNode;
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
