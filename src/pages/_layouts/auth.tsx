import { Box, Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useTheme } from '../../App' // Importa o hook
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
export function AuthLayout() {
    const { isDarkMode } = useTheme() // Usa o contexto de tema
    const [opacityDark, setOpacityDark] = useState(1)
    const [opacityLight, setOpacityLight] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        if (isDarkMode.palette.mode === 'dark') {
            setOpacityDark(1)
            setOpacityLight(0)
        } else {
            setOpacityDark(0)
            setOpacityLight(1)
        }
    }, [isDarkMode])

    return (
        <Stack direction="row" sx={{ width: '100%', height: '100vh' }}>

            <Box
                sx={{
                    width: '50%',
                    backgroundColor: 'rgba(244, 244, 244, 1)',
                    overflow: 'hidden', // Evita a rolagem
                    position: 'relative', // Para posicionar as imagens
                }}
            >

                <Button
                    variant="text"
                    onClick={() => navigate('/')}
                    sx={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        zIndex: 10, // Z-index mais alto para o botão
                        color: 'white'
                    }}
                >
                    <ArrowBackIosIcon fontSize="small" />
                    Home

                </Button>

                <img
                    src="https://tse3.mm.bing.net/th?id=OIG3.NcYxR3rq9OIBIE8aJoJ9&pid=ImgGn"
                    alt="Dark Mode"
                    style={{
                        width: '100%',
                        maxHeight: '100vh',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: opacityDark,
                        transition: 'opacity 0.5s ease-in-out',
                        zIndex: 1, // Z-index menor para a imagem de Dark Mode
                    }}
                />

                <img
                    src="https://tse3.mm.bing.net/th?id=OIG2._Mu0_4Mez6j1Au_p5gn5&pid=ImgGn"
                    alt="Light Mode"
                    style={{
                        width: '100%',
                        maxHeight: '100vh',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: opacityLight,
                        transition: 'opacity 0.5s ease-in-out',
                        zIndex: 1, // Z-index menor para a imagem de Light Mode
                    }}
                />
            </Box>
            <Box sx={{ width: '50%' }}>
                <Outlet />
            </Box>
        </Stack >
    )
}
