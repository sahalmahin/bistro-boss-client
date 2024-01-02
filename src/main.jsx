import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './Routes/Routes';
import "./index.css";
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
