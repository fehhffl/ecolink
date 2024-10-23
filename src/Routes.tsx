import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { UserAreaLayout } from './pages/_layouts/userArea'
import MyProfile from './pages/app/MyProfile'
import MyDonations from './pages/app/MyDonations'
import MyMenssages from './pages/app/MyMenssages'
import { Home } from './pages/app/Home'
import { AppLayout } from './pages/_layouts/app'
import { DonationDetails } from './pages/app/DonationDetails '
import { AuthLayout } from './pages/_layouts/auth'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import Sobre from './pages/app/Sobre'

export const router = createBrowserRouter([
    {
        path: '/sobre',
        element: <Sobre />

    },
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


        ]
    },
    {
        path: '/',
        element: <UserAreaLayout />,
        children: [
            {
                path: '/perfil',
                element: (
                    <MyProfile />

                )
            },
            {
                path: '/mydonations',
                element: (

                    <MyDonations />

                )
            },
            {
                path: '/mymessages',
                element: (

                    <MyMenssages />

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