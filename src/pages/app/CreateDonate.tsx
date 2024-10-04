import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid, MenuItem, Paper } from "@mui/material";
import ProductDetail from "./ProductDetails ";

const categories = ["Memória RAM", "Processador", "Placa de Vídeo", "Placa Mãe", "Fonte", "Periférico"];

function CreateDonate() {
    // Ajustar o tipo de image para string | null
    const [image, setImage] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    // Especificar o tipo do evento de arquivo
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Atualizar o estado com a string da URL
        }
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Paper elevation={3} sx={{ padding: 4 }}>
                <Typography marginBottom={4} fontSize={30}>
                    Anunciar Produto
                </Typography>
                <Grid container spacing={2}>
                    {/* Seção de upload de imagem */}
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                width: "100%",
                                height: 250,
                                border: "1px solid #ccc",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                borderRadius: 2
                            }}
                        >
                            {image ? (
                                <img
                                    src={image}
                                    alt="Uploaded"
                                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                />
                            ) : (
                                <>
                                    <Typography variant="body1">Carregue sua imagem aqui</Typography>
                                    <Button variant="contained" component="label">
                                        Upload
                                        <input type="file" hidden onChange={handleImageUpload} />
                                    </Button>
                                </>
                            )}
                        </Box>
                    </Grid>

                    {/* Seção de título e categoria */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Título do Anúncio"
                            variant="outlined"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            select
                            fullWidth
                            label="Categoria"
                            variant="outlined"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            sx={{ mb: 2 }}
                        >
                            {categories.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    {/* Seção de descrição */}
                    <Grid item xs={12}>
                        <TextField
                            label="Descrição"
                            multiline
                            rows={6}
                            fullWidth
                            variant="outlined"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>

                    {/* Botão Anunciar */}
                    <Grid item xs={12} display="flex" justifyContent="flex-end">
                        <Button variant="contained" size="large">
                            Anunciar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default CreateDonate;
