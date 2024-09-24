import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

function ProductDetail() {
    // Informações do produto
    const product = {
        title: "Processador Ryzen",
        description:
            "Estou doando um Processador AMD Ryzen 7 3700X 4.4GHz que não utilizo mais. Ele está em ótimas condições de funcionamento, sem defeitos e nunca passou por overclock. Usei esse processador em meu computador pessoal principalmente para tarefas de desenvolvimento e alguns jogos, mas recentemente fiz um upgrade e decidi que ele pode ser mais útil para outra pessoa.",
        location: "Sorocaba, SP",
        image: "https://a-static.mlcdn.com.br/800x560/processador-amd-ryzen-7-3700x-3-6ghz-max-4-4ghz-ddr4-am4-32mb-cache/trpstore/12588831972/2a6094afa2668a7a8d79fee85b28b1f7.jpeg",
        nomeDono: "Pedro Alves",
        numeroDono: "(15) 99555-0987",
        categoria: "Processador"
    };

    return (
        <Box
            sx={{
                padding: 4,
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Paper elevation={3} sx={{ padding: 3, width: "100%", maxWidth: 1200 }}>
                <Grid container spacing={2}>
                    {/* Coluna da imagem */}
                    <Grid item xs={12} sm={6}>
                        <Box
                            component="img"
                            src={product.image}
                            alt={product.title}
                            sx={{
                                width: "100%",
                                height: "auto", // Altura automática para manter a proporção
                                maxHeight: "400px", // Tamanho máximo para a altura
                                objectFit: "contain", // Garante que a imagem se ajuste sem distorção
                                borderRadius: 2
                            }}
                        />
                    </Grid>

                    {/* Coluna das informações */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3" gutterBottom>
                            {product.title}
                        </Typography>
                        <Typography variant="subtitle1">
                            <strong>Dono: </strong> {product.nomeDono}
                        </Typography>
                        <Typography variant="subtitle1">
                            <strong>Tel: </strong> {product.numeroDono}
                        </Typography>
                        <Typography variant="subtitle1">
                            <strong>Localização: </strong> {product.location}
                        </Typography>
                        <Typography variant="subtitle1">
                            <strong>Categoria: </strong> {product.categoria}
                        </Typography>
                    </Grid>
                </Grid>

                {/* Descrição abaixo */}
                <Box mt={4}>
                    <Typography variant="h5">Descrição :</Typography>
                    <Typography variant="body1" mt={2}>
                        {product.description}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}

export default ProductDetail;
