import React from 'react'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Checkbox from '@mui/joy/Checkbox'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Link from '@mui/joy/Link'
import Input from '@mui/joy/Input'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import { Divider } from '@mui/joy'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const signInForm = z.object({
    email: z.string().email('Formato de email inválido'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
})

type SignInForm = z.infer<typeof signInForm>

export function Login() {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInForm>({
        resolver: zodResolver(signInForm),
    })

    async function handleSignIn(data: SignInForm) {
        console.log(data)
        await new Promise((resolve) => setTimeout(resolve, 2000))
    }

    return (
        <Box
            component="main"
            sx={{
                my: 'auto',
                py: 2,
                pb: 5,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: 400,
                maxWidth: '100%',
                mx: 'auto',
                borderRadius: 'sm',
                '& form': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                },
                ['& .MuiFormLabel-asterisk']: {
                    visibility: 'hidden',
                },
            }}
        >
            <Stack sx={{ gap: 4, mb: 2 }}>
                <Stack sx={{ gap: 1 }}>
                    <Typography component="h1" level="h3">
                        Entrar
                    </Typography>

                    <Typography level="body-sm">
                        Novo usuário?{' '}
                        <Link href="/cadastrar" level="title-sm">
                            Cadastrar!
                        </Link>
                    </Typography>
                </Stack>

            </Stack>
            <Link href="/" style={{ textDecoration: 'none' }}>
                <Button
                    variant="soft"
                    color="neutral"
                    fullWidth
                >
                    Ver doações sem logar
                </Button>
            </Link>
            <Divider
                sx={(theme) => ({
                    [theme.getColorSchemeSelector('light')]: {
                        color: { xs: '#FFF', md: 'text.tertiary' },
                    },
                })}
            >
                ou
            </Divider>
            <Stack sx={{ gap: 0, mt: 2 }}>
                <form
                    onSubmit={handleSubmit(handleSignIn)}
                >
                    <FormControl required error={!!errors.email}>
                        <FormLabel color={errors.email ? 'danger' : 'neutral'}>Email</FormLabel>
                        <Input
                            {...register('email')}
                            error={!!errors.email}
                            color={errors.email ? 'danger' : 'neutral'}
                        />
                        {errors.email && <Typography level="body-sm" color="danger">{errors.email.message}</Typography>}
                    </FormControl>
                    <FormControl required error={!!errors.password}>
                        <FormLabel color={errors.password ? 'danger' : 'neutral'}>Senha</FormLabel>
                        <Input
                            type="password"
                            {...register('password')}
                            error={!!errors.password}
                            color={errors.password ? 'danger' : 'neutral'}
                        />
                        {errors.password && <Typography level="body-sm" color="danger">{errors.password.message}</Typography>}
                    </FormControl>
                    <Stack sx={{ gap: 4, mt: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Checkbox size="sm" label="Lembrar senha" name="persistent" />
                            <Link level="title-sm" href="#replace-with-a-link">
                                Esqueceu sua senha?
                            </Link>
                        </Box>
                        <Button type="submit" fullWidth disabled={isSubmitting}>
                            Entrar
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Box>
    )
}
