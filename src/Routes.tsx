import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Login } from './pages/auth/Login'
import Home from './pages/Home'
import ProtectedRoute from './ProtectedLayout/ProtectedRoute'
import CreateDonate from './pages/auth/CreateDonate'

const isAuthenticated = false

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },

    {
        path: '/cadastrar',
        element: <App />
    },

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/create-donate',
        element: (
            <ProtectedRoute isAuth={isAuthenticated}>
                <CreateDonate />
            </ProtectedRoute>
        )
    }
])
