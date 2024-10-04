import React, { useEffect, useState } from 'react'
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, ButtonBase } from '@mui/material'
import { Link } from 'react-router-dom'
import { Categoria, getAllProducts, Product, categories } from '../../repositories/ProductRepository'

// Definindo o tipo de categoria

// Lista de produtos com categorias definidas usando o tipo "Categoria"

// Definindo categorias disponíveis como um array de valores do tipo Categoria

function Home() {
    const [products, setProducts] = useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

    function viewDidLoad() {
        populateProducts()
    }

    useEffect(viewDidLoad, [])

    // Estado para armazenar a categoria selecionada
    const [selectedCategory, setSelectedCategory] = useState<Categoria | null>(null)

    // Função para manipular a seleção da categoria
    const handleCategorySelect = (category: Categoria | null) => {
        setSelectedCategory(category)
    }

    async function populateProducts() {
        const products = await getAllProducts()
        setProducts(products) // getAllProducts retorna um array de produtos
        setFilteredProducts(
            selectedCategory ? products.filter((product) => product.categoria === selectedCategory) : products
        )
    }

    return (
        <>
            <Box sx={{ padding: 3 }}>
                <Box textAlign="center" mb={4}>
                    <Typography variant="h4" fontWeight="bold">
                        Encontre doações perfeitas em qualquer hora do dia.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" mt={1}>
                        Com o DonaTech, você encontra peças de computador que atendem as suas necessidades.
                    </Typography>
                </Box>
                <Box mb={4}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="outlined" onClick={() => handleCategorySelect(null)}>
                                Todas
                            </Button>
                        </Grid>
                        {categories.map((category, index) => (
                            <Grid item key={index}>
                                <Button variant="outlined" onClick={() => handleCategorySelect(category)}>
                                    {category}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Typography variant="h6" gutterBottom>
                    {selectedCategory ? selectedCategory : 'Todos os produtos'}
                </Typography>
                <Grid container spacing={3}>
                    {filteredProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <ButtonBase sx={{ width: '100%' }}>
                                    <Card
                                        sx={{
                                            width: '100%',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)', // Aumenta o card ao passar o mouse
                                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' // Adiciona uma sombra mais forte
                                            }
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={product.image}
                                            alt={product.title}
                                        />
                                        <CardContent sx={{ textAlign: 'left' }}>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {product.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {product.description}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {product.location}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                <strong>Dono:</strong> {product.nomeDono}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                <strong>Contato:</strong> {product.numeroDono}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </ButtonBase>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default Home
