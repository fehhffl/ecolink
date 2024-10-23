import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/SideBar'
import Box from '@mui/joy/Box'
import Header from '../../components/Header'

export function UserAreaLayout() {
    return (
        <>

            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Sidebar />
                <Header />
                <Outlet />
            </Box>


        </>
    )
}