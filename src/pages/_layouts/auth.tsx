import { Box, Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'


export function AuthLayout() {
    return (
        <Stack direction="row" sx={{ width: '100%', height: '100vh' }}>
            <Box
                sx={{
                    width: '50%',
                    backgroundColor: 'rgba(244, 244, 244, 1)',
                }}
            >

            </Box>
            <Box
                sx={{
                    width: '50%',
                    backgroundColor: 'white',
                }}
            >
                <Outlet />
            </Box>
        </Stack>

    )
}