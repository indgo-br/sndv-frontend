import { createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/Authentication/Login';
import SignUp from '@/pages/Authentication/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/cadastrar',
    element: <SignUp />,
  },
]);

export default router;
