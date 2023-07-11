import { RouterProvider } from 'react-router-dom';
import ThemeProvider from '@/theme/ThemeProvider';
import GlobalStyle from '@/theme/globalStyle';
import router from './router';

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
