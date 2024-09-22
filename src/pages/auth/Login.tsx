import React from 'react'
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function Login() {
    const navigate = useNavigate()

    return (

        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                width: '50%',
                justifyContent: 'center'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    flexDirection: 'column',
                    gap: '16px'
                }}
            >
                <Box width={400} marginBottom={'16px'}>
                    <Typography variant={'h4'} align={'left'}>
                        Log in
                    </Typography>
                </Box>
                <Stack width={400} direction={'column'} spacing={2}>
                    <TextField id="email" label="Email" variant="outlined" />
                    <TextField id="senha" label="Senha" variant="outlined" />
                </Stack>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        navigate('/home')
                    }}
                >
                    <Button variant="contained" size="large">
                        Entrar
                    </Button>
                </Link>
            </Box>
        </Box>

    )
}
