import React, { useEffect, useState } from 'react'
import { ColorPaletteProp } from '@mui/joy/styles'
import { Box } from '@mui/joy'
import Grid from '@mui/joy/Grid'
import { Categoria, getAllProducts, Product, categories } from '../../repositories/ProductRepository'
import AspectRatio from '@mui/joy/AspectRatio'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Typography from '@mui/joy/Typography'
import { Link } from 'react-router-dom'
import Chip from '@mui/joy/Chip'

export function Home() {
    const [donations, setDonations] = useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

    useEffect(() => {
        async function viewDidLoad() {
            await populateProducts()
        }
        viewDidLoad()
    }, [])

    const [selectedCategory, setSelectedCategory] = useState<Categoria | null>(null)

    const handleCategorySelect = (category: Categoria | null) => {
        setSelectedCategory(category)
        const filtered = category
            ? donations.filter((donation) => donation.categoria === category)
            : donations
        setFilteredProducts(filtered)
    }

    async function populateProducts() {
        const donations = await getAllProducts()
        setDonations(donations)
        setFilteredProducts(donations)
    }

    return (
        <Box sx={{ padding: 3 }}>
            <Box sx={{ padding: 0 }}>
                <Box textAlign="center" mb={4}>
                    <Typography level="h2" fontWeight="bold">
                        Encontre doações perfeitas em qualquer hora do dia.
                    </Typography>
                    <Typography level="body-sm" mt={1}>
                        Com o DonaTech, você encontra peças de computador que atendem às suas necessidades.
                    </Typography>
                </Box>
            </Box>

            <Box mb={4}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid>
                        <Button variant="outlined" onClick={() => handleCategorySelect(null)}>
                            Todas
                        </Button>
                    </Grid>
                    {categories.map((category, index) => (
                        <Grid key={index}>
                            <Button variant="outlined" onClick={() => handleCategorySelect(category)}>
                                {category}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Typography gutterBottom level="h4">
                {selectedCategory ? selectedCategory : 'Todos os produtos'}
            </Typography>
            <Grid container spacing={3}>
                {filteredProducts.map((donation) => (
                    <Grid xs={12} sm={6} md={4} key={donation.id}>
                        <Link to={`/donation/${donation.id}`} style={{ textDecoration: 'none' }}>
                            <Card
                                variant="outlined"
                                sx={{
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                    }
                                }}
                            >
                                <CardOverflow>
                                    <AspectRatio ratio="3">
                                        <img
                                            src={donation.image}
                                            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                </CardOverflow>
                                <CardContent>

                                    <Typography
                                        level="title-lg"
                                        sx={{ mt: 1, fontWeight: 'xl' }}
                                        endDecorator={
                                            <Chip
                                                component="span"
                                                size="sm"
                                                variant="soft"
                                                color={
                                                    {
                                                        Funcionando: 'success',
                                                        Sem_Status: 'neutral',
                                                        Falha: 'danger',
                                                    }[donation.status] as ColorPaletteProp
                                                }
                                            >
                                                {donation.status}
                                            </Chip>
                                        }
                                    >
                                        {donation.title}

                                    </Typography>
                                    {donation.description}
                                    <Typography level="body-sm">
                                        {donation.location}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box >
    )
}
