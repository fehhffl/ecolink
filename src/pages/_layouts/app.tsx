import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

export function AppLayout() {
    return (
        <>
            <Header />
            <div>
                <Outlet />
            </div>
        </>
    )
}