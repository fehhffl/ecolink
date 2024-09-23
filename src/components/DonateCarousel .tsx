import React from 'react'
import { Card, CardMedia, Grid } from '@mui/material'

const ImageDisplay = () => {
    const images = [
        'https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F102438%2Fprocessador-amd-ryzen-5-3600-cache-32mb-3-6ghz-4-2ghz-max-turbo-am4-sem-video-100-100000031box_1629126186_g.jpg&w=1080&q=100',
        'https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F102438%2Fprocessador-amd-ryzen-5-3600-cache-32mb-3-6ghz-4-2ghz-max-turbo-am4-sem-video-100-100000031box_1629126186_g.jpg&w=1080&q=100',
        'https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F102438%2Fprocessador-amd-ryzen-5-3600-cache-32mb-3-6ghz-4-2ghz-max-turbo-am4-sem-video-100-100000031box_1629126186_g.jpg&w=1080&q=100',
    ]

    return (
        <Grid container spacing={3} style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
            {images.map((image, index) => (
                <Grid item xs={8} sm={4} md={3} key={index}>
                    <Card style={{ width: '100%' }} elevation={0}>
                        <CardMedia
                            component="img"
                            style={{ width: '100%', height: 'auto' }} // Ajusta a imagem para preencher o Card
                            image={image}
                            alt={`Imagem ${index + 1}`}
                        />
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}


export default ImageDisplay
