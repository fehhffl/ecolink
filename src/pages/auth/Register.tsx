import React, { useState } from 'react'
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function App() {
  const [cpf, setCpf] = useState('')
  const navigate = useNavigate()

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
            Cadastro
          </Typography>
        </Box>

        <Box width={400}>
          <Typography variant={'subtitle2'} align={'left'}>
            Informações Pessoais.
          </Typography>
        </Box>

        <Stack direction={'row'} spacing={2}>
          <TextField id="nome" label="Nome" variant="outlined" />
          <TextField id="sobrenome" label="Sobrenome" variant="outlined" />
        </Stack>

        <Stack width={400} spacing={2} flexDirection={'column'}>
          <TextField id="email" label="Email" variant="outlined" />

          {/* Campo de CPF com formatação manual */}
          <TextField id="cpf" label="CPF" variant="outlined" value={cpf} onChange={handleCpfChange} />
        </Stack>

        <Box width={400}>
          <Typography variant={'subtitle2'} align={'left'}>
            Endereço.
          </Typography>
        </Box>

        <Stack direction={'row'} spacing={2}>
          {/* Aceitar apenas números no campo de Número da Casa */}
          <TextField
            id="numero-casa"
            label="Número da Casa"
            variant="outlined"
            type="number" // Campo só aceita números
          />
          <TextField id="bairro" label="Bairro" variant="outlined" />
        </Stack>

        <Stack width={400} spacing={2} flexDirection={'column'}>
          <TextField id="rua" label="Rua" variant="outlined" />
        </Stack>

        <Button variant="contained" size="large">
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

export default App
