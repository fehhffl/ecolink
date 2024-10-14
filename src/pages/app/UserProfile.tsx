import React from 'react'
import {
    Box,
    TextField,
    Button,
    Typography,
    Avatar,
    IconButton,

} from '@mui/material'
import { z } from 'zod'
import EditIcon from '@mui/icons-material/Edit'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const userProfileForm = z.object({
    email: z.string().email('Formato de email inválido'),
    primeiroNome: z.string().nonempty('Primeiro nome é obrigatório'),
    sobrenome: z.string().nonempty('Sobrenome é obrigatório'),
    cidade: z.string().nonempty('Cidade é obrigatória'),
    bairro: z.string().nonempty('Bairro é obrigatório'),
    rua: z.string().nonempty('Rua é obrigatória'),
    numero: z.string().nonempty('Número é obrigatório').transform((val) => parseInt(val, 10)), // Transforma para número
})
type UserProfileFrom = z.infer<typeof userProfileForm>;

export function UserProfile() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<UserProfileFrom>({
        resolver: zodResolver(userProfileForm),
    })

    const handleSave = (data: UserProfileFrom) => {
        console.log(data)
    }

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <form onSubmit={handleSubmit(handleSave)}>
                <Box
                    sx={{
                        width: 400,
                        marginTop: '50px',
                        padding: 3,
                        backgroundColor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ position: 'relative', marginBottom: 2 }}>
                        <Avatar
                            sx={{ width: 100, height: 100 }}
                            alt="Profile Picture"
                            src="https://avatars.githubusercontent.com/u/19550456"
                        />
                        <IconButton
                            color="primary"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                bgcolor: 'background.paper',
                                boxShadow: 1,
                            }}
                        >
                            <EditIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="h6" gutterBottom>
                        Informações pessoais
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        Personalize como as informações do seu perfil.
                    </Typography>

                    <TextField
                        label="Primeiro Nome"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('primeiroNome')}
                        error={!!errors.primeiroNome}

                    />
                    <TextField
                        label="Sobrenome"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('sobrenome')}
                        error={!!errors.sobrenome}

                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('email')}
                        error={!!errors.email}

                    />
                    <TextField
                        label="Cidade"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('cidade')}
                        error={!!errors.cidade}

                    />
                    <TextField
                        label="Bairro"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...register('bairro')}
                        error={!!errors.bairro}

                    />

                    <Box display="flex" width="100%" margin="normal">
                        <TextField
                            label="Rua"
                            variant="outlined"
                            fullWidth
                            sx={{ marginRight: 1 }}
                            {...register('rua')}
                            error={!!errors.rua}

                        />
                        <TextField
                            label="Número"
                            variant="outlined"
                            sx={{ width: '100px' }}
                            {...register('numero')}
                            error={!!errors.numero}

                        />
                    </Box>

                    <Box display="flex" justifyContent="space-between" marginTop={3} width="100%">
                        <Button type="submit" variant="contained" sx={{ flex: 1 }} disabled={isSubmitting}>
                            Save
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}
