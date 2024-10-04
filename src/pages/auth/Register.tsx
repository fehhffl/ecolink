import React, { useState } from 'react'
import { Box, Button, IconButton, Link, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useTheme } from '../../App'

export function Register() {
  const [cpf, setCpf] = useState('')
  const navigate = useNavigate()
  const { isDarkMode, toggleTheme } = useTheme() // Usa o contexto de tema
  // Função para formatar o CPF
  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, '') // Remove tudo que não for dígito
    value = value.replace(/(\d{3})(\d)/, '$1.$2') // Coloca um ponto entre o terceiro e o quarto dígitos
    value = value.replace(/(\d{3})(\d)/, '$1.$2') // Coloca um ponto entre o sexto e o sétimo dígitos
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2') // Coloca um traço entre o nono e o décimo dígitos

    setCpf(value) // Atualiza o estado com o valor formatado
  }

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
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
          flexDirection: 'column',
          gap: '16px',

        }}
      >
        <Typography variant={'h4'} align={'left'}>
          Cadastro
        </Typography>

        <Typography variant={'subtitle2'} align={'left'}>
          Informações Pessoais.
        </Typography>

        <Stack direction={'row'} spacing={2}>
          <TextField id="nome" label="Nome" variant="outlined" fullWidth />
          <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth />
        </Stack>

        <Stack spacing={2}>
          <TextField id="email" label="Email" variant="outlined" fullWidth />

          {/* Campo de CPF com formatação manual */}
          <TextField
            id="cpf"
            label="CPF"
            variant="outlined"
            value={cpf}
            onChange={handleCpfChange}
            fullWidth
          />
        </Stack>

        <Typography variant={'subtitle2'} align={'left'}>
          Endereço.
        </Typography>

        <Stack direction={'row'} spacing={2}>
          {/* Aceitar apenas números no campo de Número da Casa */}
          <TextField
            id="numero-casa"
            label="Número da Casa"
            variant="outlined"
            type="number" // Campo só aceita números
            fullWidth
          />
          <TextField id="bairro" label="Bairro" variant="outlined" fullWidth />
        </Stack>

        <TextField id="rua" label="Rua" variant="outlined" fullWidth />

        <Button variant="contained" size="large" fullWidth>
          Cadastrar
        </Button>

        <Link
          component="button"
          variant="body2"
          onClick={() => {
            navigate('/login')
          }}
        >
          Já possui uma conta?
        </Link>
      </Box>
    </Box>
  )
}


