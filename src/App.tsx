import * as React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
export function App() {


    return (

        <CssVarsProvider>

            <CssBaseline />
            <RouterProvider router={router} />

        </CssVarsProvider>

    )
}


