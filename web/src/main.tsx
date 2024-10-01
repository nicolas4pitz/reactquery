import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: '',
        element: <App />
    }
])

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}> </RouterProvider>
    </QueryClientProvider>
)
