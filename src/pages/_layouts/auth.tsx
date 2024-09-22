import { Box, Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'


export function AuthLayout() {
    return (
        <Stack direction={'row'} style={{ justifyContent: 'space-around' }}>

            <Box
                width={'50%'}
                component={'img'}
                src={'https://twosides.org.br/wp-content/uploads/sites/15/2021/03/Pilhas.png'}
            ></Box>
            <div>
                <Outlet />
            </div>
        </Stack >
    )
}