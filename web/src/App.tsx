import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import MainMenu from '@pages/MainMenu';
import NotFound from '@pages/NotFound';
import RegisterForm from '@components/RegisterForm';

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
    element: <RegisterForm />,
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