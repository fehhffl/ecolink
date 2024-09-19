import React from "react";
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, Stack } from "@mui/material";

// Dummy product data (you can replace this with real data later)
const products = [
    {
        id: 1,
        title: "Memória RAM",
        description: "8GB DDR3 1600Mhz",
        location: "Sorocaba, SP",
        image: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/rkgqanvu/file.png"
    },
    {
        id: 2,
        title: "Memória RAM",
        description: "4GB DDR3 1333Mhz",
        location: "Sorocaba, SP",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_954399-MLU77806405179_072024-F.webp"
    },
    {
        id: 3,
        title: "Memória RAM",
        description: "16GB DDR4 2400Mhz",
        location: "Sorocaba, SP",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_954399-MLU77806405179_072024-F.webp"
    },
    {
        id: 4,
        title: "Processador Ryzen",
        description: "AMD Ryzen 5 3600 3.6GHz",
        location: "Sorocaba, SP",
        image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F102438%2Fprocessador-amd-ryzen-5-3600-cache-32mb-3-6ghz-4-2ghz-max-turbo-am4-sem-video-100-100000031box_1629126186_g.jpg&w=1080&q=100"
    },
    {
        id: 5,
        title: "Processador Ryzen",
        description: "AMD Ryzen 7 3700X 4.4GHz",
        location: "Sorocaba, SP",
        image: "https://a-static.mlcdn.com.br/800x560/processador-amd-ryzen-7-3700x-3-6ghz-max-4-4ghz-ddr4-am4-32mb-cache/trpstore/12588831972/2a6094afa2668a7a8d79fee85b28b1f7.jpeg"
    }
];

const categories = ["Memória RAM", "Processador", "Placa de Vídeo", "Placa Mãe", "Fonte", "Periférico"];

function Home() {
    return (
        <Box sx={{ padding: 3 }}>
            {/* Header Section */}
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" fontWeight="bold">
                    Encontre doações perfeitas em qualquer hora do dia.
                </Typography>
                <Typography variant="body1" color="textSecondary" mt={1}>
                    Com o DonaTech, você encontra peças de computador que atendem as suas necessidades.
                </Typography>
            </Box>

            {/* Categories Section */}
            <Box mb={4}>
                <Grid container spacing={2} justifyContent="center">
                    {categories.map((category, index) => (
                        <Grid item key={index}>
                            <Button variant="outlined">{category}</Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Product Grid Section */}
            <Typography variant="h6" gutterBottom>
                Memória RAM
            </Typography>
            <Grid container spacing={3}>
                {products.slice(0, 3).map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card>
                            <CardMedia component="img" height="140" image={product.image} alt={product.title} />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {product.description}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {product.location}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h6" gutterBottom mt={4}>
                Processador
            </Typography>
            <Grid container spacing={3}>
                {products.slice(3, 5).map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card>
                            <CardMedia component="img" height="140" image={product.image} alt={product.title} />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {product.description}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {product.location}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Home;
