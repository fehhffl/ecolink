import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Register } from './pages/auth/Register'
import { Login } from './pages/auth/Login'
import Home from './pages/app/Home'
import ProtectedRoute from './ProtectedLayout/ProtectedRoute'
import CreateDonate from './pages/app/CreateDonate'
import { DonationDetails } from './pages/app/DonationDetails '
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { UserProfile } from './pages/app/UserProfile'
import { Donation } from './pages/app/Donation'

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
                path: '/donation/:id',
                element: <DonationDetails />
            },
            {
                path: '/create-donate',
                element: (
                    <ProtectedRoute isAuth={isAuthenticated}>
                        <CreateDonate />
                    </ProtectedRoute>
                )
            },
            {
                path: '/profile',
                element: (
                    <ProtectedRoute isAuth={isAuthenticated}>
                        <UserProfile />
                    </ProtectedRoute>
                )
            },
            {
                path: '/donation',
                element: (
                    <ProtectedRoute isAuth={isAuthenticated}>
                        <Donation />
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
