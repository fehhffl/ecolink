import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import ApartmentIcon from '@mui/icons-material/Apartment'


export function Register() {
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
      component="main"
      sx={{
        my: 'auto',
        py: 2,
        pb: 5,
        display: 'flex',
        flexDirection: 'column',
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
      <Stack sx={{ mb: 2 }}>
        <Stack sx={{ gap: 1 }}>
          <Typography component="h1" level="h3">
            Cadastrar
          </Typography>


        </Stack>

      </Stack>
      <Stack sx={{ gap: 0, mt: 2 }}>
        <form

        >
          <FormLabel>Informações Pessoais</FormLabel>
          <FormControl required>

            <Input name="nome" placeholder='Nome' />
          </FormControl>

          <FormControl required>

            <Input name="cpf" placeholder='CPF' />
          </FormControl>

          <FormControl required>

            <Input type="email" name="email" placeholder='E-mail' />
          </FormControl>

          <FormControl required>

            <Input type="password" name="password" placeholder='Senha' />
          </FormControl>
          <FormLabel>Endereço</FormLabel>
          <FormControl sx={{ display: { sm: 'contents' } }}>

            <Input
              startDecorator={<ApartmentIcon />}
              placeholder='Cidade'
            >
            </Input>
          </FormControl>
          <FormControl sx={{ flexGrow: 1 }}>
            <Input sx={{ flexGrow: 1 }} placeholder='Bairro' />
          </FormControl>
          <Stack direction="row" spacing={2}>

            <FormControl sx={{ flexGrow: 1 }}>
              <Input sx={{ flexGrow: 1 }} placeholder='Rua' />
            </FormControl>
            <FormControl >
              <Input
                sx={{ width: '100px' }}
                placeholder='Número'
              />
            </FormControl>
          </Stack>

          <Stack sx={{ gap: 4, mt: 2 }}>

            <Button type="submit" fullWidth>
              Cadastrar
            </Button>
          </Stack>

        </form>
      </Stack>
    </Box>
  )
}


