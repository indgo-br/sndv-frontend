import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: {
      main: '#E7642E',
      light: '#FFECCC',
      medium: '#FDC886',
      dark: '#AB8B67',
    },
    high: {
      main: '#FFFFFF',
      light: '#DFE0DF',
    },
    low: {
      main: '#000000',
    },
    background: {
      primary: '#FFF8EE',
    },
  },
  spacing: (value: number) => `${value * 8}px`,
};

type Props = {
  children: React.ReactNode;
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
