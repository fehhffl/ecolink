import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function App() {
    return (
        <Stack direction={"row"}>
            <Box
                width={"50%"}
                component={"img"}
                src={
                    "https://img.freepik.com/free-photo/top-view-plant-growing-out-laptop_23-2149198344.jpg?t=st=1726514184~exp=1726517784~hmac=6388f870a6e11dc7b8b26fbe7cae9884c1b87ea542e68ee028fc19fc0ef8cefe&w=1800"
                }
            ></Box>
            <Box
                sx={{
                    alignItems: "center",
                    display: "flex",
                    width: "50%",
                    justifyContent: "center"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "100vh",
                        flexDirection: "column",
                        gap: "16px"
                    }}
                >
                    <Box width={400} marginBottom={"16px"}>
                        <Typography variant={"h4"} align={"left"}>
                            Cadastro
                        </Typography>
                    </Box>

                    <Box width={400}>
                        <Typography variant={"subtitle2"} align={"left"}>
                            Informaçoes Pessoais.
                        </Typography>
                    </Box>
                    <Stack direction={"row"} spacing={2}>
                        <TextField id="outlined-basic" label="Nome" variant="outlined" />
                        <TextField id="outlined-basic" label="Sobrenome" variant="outlined" />
                    </Stack>
                    <Stack width={400} spacing={2} flexDirection={"column"}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="CPF" variant="outlined" />
                    </Stack>
                    <Box width={400}>
                        <Typography variant={"subtitle2"} align={"left"}>
                            Endereço.
                        </Typography>
                    </Box>
                    <Stack direction={"row"} spacing={2}>
                        <TextField id="outlined-basic" label="Número da Casa" variant="outlined" />
                        <TextField id="outlined-basic" label="Bairro" variant="outlined" />
                    </Stack>
                    <Stack width={400} spacing={2} flexDirection={"column"}>
                        <TextField id="outlined-basic" label="Rua" variant="outlined" />
                    </Stack>
                    <Button variant="contained" size="large">
                        Confirmar
                    </Button>
                </Box>
            </Box>
        </Stack>
    );
}

export default App;
