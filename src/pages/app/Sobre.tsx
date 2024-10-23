import * as React from 'react'
import { useColorScheme } from '@mui/joy/styles'
import Box from '@mui/joy/Box'

import IconButton from '@mui/joy/IconButton'

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'


import HeroLeft01 from '../../components/block/HeroLeft01'
import HeroLeft02 from '../../components/block/HeroLeft02'


function ColorSchemeToggle() {
    const { mode, setMode } = useColorScheme()
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
    }
    return (
        <IconButton
            data-screenshot="toggle-mode"
            size="lg"
            variant="soft"
            color="neutral"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark')
                } else {
                    setMode('light')
                }
            }}
            sx={{
                position: 'fixed',
                zIndex: 999,
                top: '1rem',
                right: '1rem',
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
        >
            {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
    )
}

export default function TeamExample() {
    return (

        <>
            <ColorSchemeToggle />
            <Box
                sx={{
                    height: '100vh',
                    overflowY: 'scroll',
                    scrollSnapType: 'y mandatory',
                    '& > div': {
                        scrollSnapAlign: 'start',
                    },
                }}
            >
                <HeroLeft01 />
                <HeroLeft02 />
            </Box>
        </>

    )
}
