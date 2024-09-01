import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import MainMenu from '@pages/MainMenu';
import NotFound from '@pages/NotFound';
import TestingComponent from '@components/TestComponent';
// import Signup from '@pages/Signup';
// import SignupAdditional from '@pages/SignupAdditional';
// import SignupEmergency from '@pages/SignupEmergency';
import SignUpPage from '@pages/SignUpPage';
import RegisterModalErrorContextProvider from './context/RegisterModalErrorContextProvider';
import RegisterErrorModal from '@components/RegisterErrorModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainMenu />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: 'register',
    element: (
      <RegisterModalErrorContextProvider>
        <RegisterErrorModal />
      <SignUpPage />
      </RegisterModalErrorContextProvider>
  ),
  },
  {
    path: '/testing',
    element: <TestingComponent />,
  },
]);

export default function App() {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
