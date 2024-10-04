import React from 'react'
import { Box, Button, Stack, TextField, Typography, Link, IconButton } from '@mui/material'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import { useTheme } from '../../App'

const signInForm = z.object({
    email: z.string().email('Formato de email inválido'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
})
type SignInForm = z.infer<typeof signInForm>

export function Login() {
    const navigate = useNavigate()
    const { isDarkMode, toggleTheme } = useTheme() // Usa o contexto de tema

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInForm>({
        resolver: zodResolver(signInForm),
    })

    async function handleSignIn(data: SignInForm) {
        console.log(data)
        await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                height: '100vh',
                position: 'relative',
            }}
        >

            <IconButton
                size="small"
                onClick={toggleTheme}
                color="inherit"
                sx={{
                    mr: 1,
                    border: '1px solid',
                    borderColor: '#cdd7e1',
                    borderRadius: '4px',
                    position: 'absolute',
                    top: '20px',
                    right: '40px',
                    textTransform: 'none',

                    fontWeight: 'bold',
                }}
            >
                {isDarkMode.palette.mode === 'dark' ? (
                    <LightModeIcon sx={{ color: isDarkMode.palette.primary.main }} />
                ) : (
                    <DarkModeIcon sx={{ color: isDarkMode.palette.primary.main }} />
                )}
            </IconButton>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '16px',
                    width: '50%',
                }}
            >
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <Box width={400} marginBottom={'16px'}>
                        <Typography variant={'h4'} align={'left'}>
                            Log in
                        </Typography>
                    </Box>

                    <Stack width={400} direction={'column'} spacing={2}>
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            {...register('email')}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />

                        <TextField
                            id="password"
                            label="Senha"
                            variant="outlined"
                            type="password"
                            {...register('password')}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                    </Stack>

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        sx={{ mt: 2, width: '100%' }}
                    >
                        Entrar
                    </Button>

                </form>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        navigate('/cadastrar')
                    }}

                >
                    Cadastrar
                </Link>
            </Box>
        </Box>

    )
}
