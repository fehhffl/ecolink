import React from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
    isAuth: boolean;
    children: any;
}

// Componente para proteger rotas
const ProtectedRoute = ({ isAuth, children }: ProtectedRouteProps) => {
    return isAuth ? children : <Navigate to="/login" />
}

export default ProtectedRoute