import React from 'react'
import { Box, } from '@mui/material'

export function DonationDetails() {
    // Informações do produto
    const product = {
        title: 'Processador Ryzen',
        description:
            'Estou doando um Processador AMD Ryzen 7 3700X 4.4GHz que não utilizo mais. Ele está em ótimas condições de funcionamento, sem defeitos e nunca passou por overclock. Usei esse processador em meu computador pessoal principalmente para tarefas de desenvolvimento e alguns jogos, mas recentemente fiz um upgrade e decidi que ele pode ser mais útil para outra pessoa.',
        location: 'Sorocaba, SP',
        image: 'https://a-static.mlcdn.com.br/800x560/processador-amd-ryzen-7-3700x-3-6ghz-max-4-4ghz-ddr4-am4-32mb-cache/trpstore/12588831972/2a6094afa2668a7a8d79fee85b28b1f7.jpeg',
        nomeDono: 'Pedro Alves',
        numeroDono: '(15) 99555-0987',
        categoria: 'Processador'
    }

    return (
        <Box
            sx={{
                padding: 4,
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            {product.title}
        </Box>
    )
}


