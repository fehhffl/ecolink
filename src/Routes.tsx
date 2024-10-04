import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Register } from './pages/auth/Register'
import { Login } from './pages/auth/Login'
import Home from './pages/app/Home'
import ProtectedRoute from './ProtectedLayout/ProtectedRoute'
import CreateDonate from './pages/app/CreateDonate'
import ProductDetails from './pages/app/ProductDetails '
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'

const isAuthenticated = true

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product/:id',
                element: <ProductDetails />
            },
            {
                path: '/create-donate',
                element: (
                    <ProtectedRoute isAuth={isAuthenticated}>
                        <CreateDonate />
                    </ProtectedRoute>
                )
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/cadastrar',
                element: <Register />
            }
        ]
    }
])
