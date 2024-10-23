
import * as React from 'react'

import Typography from '@mui/joy/Typography'

import TwoSidedLayout from '../TwoSidedLayout'

export default function HeroLeft01() {
    return (
        <TwoSidedLayout>
            <Typography color="primary" sx={{ fontSize: 'lg', fontWeight: 'lg' }}>
                Doar faz a diferença!
            </Typography>
            <Typography
                level="h1"
                sx={{
                    fontWeight: 'xl',
                    fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
                }}
            >
                Quem somos?
            </Typography>
            <Typography
                textColor="text.secondary"
                sx={{ fontSize: 'lg', lineHeight: 'lg' }}
            >
                A Donatech surgiu...
            </Typography>


            <Typography
                level="body-xs"
                sx={{
                    position: 'absolute',
                    top: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                HeroLeft01
            </Typography>
        </TwoSidedLayout>
    )
}
