import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Divider from '@mui/joy/Divider'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import IconButton from '@mui/joy/IconButton'
import Stack from '@mui/joy/Stack'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Typography from '@mui/joy/Typography'
import Tabs from '@mui/joy/Tabs'
import TabList from '@mui/joy/TabList'
import Tab, { tabClasses } from '@mui/joy/Tab'
import Breadcrumbs from '@mui/joy/Breadcrumbs'
import Link from '@mui/joy/Link'
import Card from '@mui/joy/Card'
import CardActions from '@mui/joy/CardActions'
import CardOverflow from '@mui/joy/CardOverflow'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'
import ApartmentIcon from '@mui/icons-material/Apartment'
import EditRoundedIcon from '@mui/icons-material/EditRounded'



export default function MyProfile() {
    return (

        <Box
            component="main"
            className="MainContent"
            sx={{
                pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
                pb: { xs: 2, sm: 2, md: 3 },
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                height: '100dvh',
                gap: 1,
                overflow: 'auto',
            }}
        >
            <Box
                sx={{
                    position: 'sticky',
                    top: { sm: -100, md: -110 },
                    bgcolor: 'background.body',
                    zIndex: 9995,
                }}
            >
                <Box sx={{ px: { xs: 2, md: 6 } }}>
                    <Breadcrumbs
                        size="sm"
                        aria-label="breadcrumbs"
                        separator={<ChevronRightRoundedIcon />}
                        sx={{ pl: 0 }}
                    >
                        <Link
                            underline="none"
                            color="neutral"
                            href="#some-link"
                            aria-label="Home"
                        >
                            <HomeRoundedIcon />
                        </Link>

                        <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
                            Perfil
                        </Typography>
                    </Breadcrumbs>
                    <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
                        Perfil
                    </Typography>
                </Box>
                <Tabs defaultValue={0} sx={{ bgcolor: 'transparent' }}>
                    <TabList
                        tabFlex={1}
                        size="sm"
                        sx={{
                            pl: { xs: 0, md: 4 },
                            justifyContent: 'left',
                            [`&& .${tabClasses.root}`]: {
                                fontWeight: '600',
                                flex: 'initial',
                                color: 'text.tertiary',
                                [`&.${tabClasses.selected}`]: {
                                    bgcolor: 'transparent',
                                    color: 'text.primary',
                                    '&::after': {
                                        height: '2px',
                                        bgcolor: 'primary.500',
                                    },
                                },
                            },
                        }}
                    >
                        <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
                            Configuração
                        </Tab>

                    </TabList>
                </Tabs>
            </Box>
            <Stack
                spacing={4}
                sx={{
                    display: 'flex',
                    maxWidth: '800px',
                    mx: 'auto',
                    px: { xs: 2, md: 6 },
                    py: { xs: 2, md: 3 },
                }}
            >
                <Card>
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md">Informações pessoais</Typography>
                        <Typography level="body-sm">
                            Personalize as informações do seu perfil.
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
                    >
                        <Stack direction="column" spacing={1}>
                            <AspectRatio
                                ratio="1"
                                maxHeight={200}
                                sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                            <IconButton
                                aria-label="upload new picture"
                                size="sm"
                                variant="outlined"
                                color="neutral"
                                sx={{
                                    bgcolor: 'background.body',
                                    position: 'absolute',
                                    zIndex: 2,
                                    borderRadius: '50%',
                                    left: 100,
                                    top: 170,
                                    boxShadow: 'sm',
                                }}
                            >
                                <EditRoundedIcon />
                            </IconButton>
                        </Stack>
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Stack spacing={1}>
                                <FormLabel>Nome</FormLabel>
                                <FormControl
                                    sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                                >
                                    <Input size="sm" placeholder="Nome" />

                                </FormControl>
                                <FormLabel>CPF</FormLabel>
                                <FormControl
                                    sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                                >
                                    <Input size="sm" placeholder="CPF" />

                                </FormControl>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <FormControl>
                                    <FormLabel>Telefone</FormLabel>
                                    <Input size="sm" defaultValue="(15) 98817-9347" />
                                </FormControl>
                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        size="sm"
                                        type="email"
                                        startDecorator={<EmailRoundedIcon />}
                                        placeholder="email"
                                        defaultValue="siriwatk@test.com"
                                        sx={{ flexGrow: 1 }}
                                    />
                                </FormControl>
                            </Stack>

                            <div>
                                <FormControl sx={{ display: { sm: 'contents' } }}>
                                    <FormLabel>Endereço</FormLabel>
                                    <Select
                                        size="sm"
                                        startDecorator={<ApartmentIcon />}
                                        defaultValue="1"
                                    >
                                        <Option value="1">
                                            Sorocaba-SP
                                        </Option>
                                        <Option value="2">
                                            Votorantim-SP

                                        </Option>
                                    </Select>
                                </FormControl>

                            </div>
                            <FormControl sx={{ flexGrow: 1 }}>
                                <Input size="sm" sx={{ flexGrow: 1 }} placeholder='Bairro' />
                            </FormControl>
                            <Stack direction="row" spacing={2}>

                                <FormControl sx={{ flexGrow: 1 }}>
                                    <Input size="sm" sx={{ flexGrow: 1 }} placeholder='Rua' />
                                </FormControl>
                                <FormControl >
                                    <Input
                                        size="sm"
                                        sx={{ width: '100px' }}
                                        placeholder='Número'
                                    />
                                </FormControl>
                            </Stack>


                        </Stack>
                    </Stack>
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
                    >
                        <Stack direction="row" spacing={2}>
                            <Stack direction="column" spacing={1}>
                                <AspectRatio
                                    ratio="1"
                                    maxHeight={108}
                                    sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                        loading="lazy"
                                        alt=""
                                    />
                                </AspectRatio>
                                <IconButton
                                    aria-label="upload new picture"
                                    size="sm"
                                    variant="outlined"
                                    color="neutral"
                                    sx={{
                                        bgcolor: 'background.body',
                                        position: 'absolute',
                                        zIndex: 2,
                                        borderRadius: '50%',
                                        left: 85,
                                        top: 180,
                                        boxShadow: 'sm',
                                    }}
                                >
                                    <EditRoundedIcon />
                                </IconButton>
                            </Stack>
                            <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                <FormLabel>Nome</FormLabel>
                                <FormControl
                                    sx={{
                                        display: {
                                            sm: 'flex-column',
                                            md: 'flex-row',
                                        },
                                        gap: 2,
                                    }}
                                >
                                    <Input size="sm" placeholder="Nome" />


                                </FormControl>
                                <FormLabel>CPF</FormLabel>
                                <FormControl
                                    sx={{
                                        display: {
                                            sm: 'flex-column',
                                            md: 'flex-row',
                                        },
                                        gap: 2,
                                    }}
                                >
                                    <Input size="sm" placeholder="CPF" />


                                </FormControl>

                            </Stack>
                        </Stack>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }} // 'column' em telas pequenas, 'row' em telas maiores
                            spacing={2}
                        >
                            <FormControl>
                                <FormLabel>Telefone</FormLabel>
                                <Input size="sm" defaultValue="(15) 98817-9347" />
                            </FormControl>
                            <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    size="sm"
                                    type="email"
                                    startDecorator={<EmailRoundedIcon />}
                                    placeholder="email"
                                    defaultValue="siriwatk@test.com"
                                    sx={{ flexGrow: 1 }}
                                />
                            </FormControl>
                        </Stack>


                        <div>
                            <FormControl sx={{ display: { sm: 'contents' } }}>
                                <FormLabel>Endereço</FormLabel>
                                <Select
                                    size="sm"
                                    startDecorator={<ApartmentIcon />}
                                    defaultValue="1"
                                >
                                    <Option value="1">
                                        Sorocaba-SP
                                    </Option>
                                    <Option value="2">
                                        Votorantim-SP

                                    </Option>
                                </Select>
                            </FormControl>

                        </div>
                        <FormControl sx={{ flexGrow: 1 }}>
                            <Input size="sm" sx={{ flexGrow: 1 }} placeholder='Bairro' />
                        </FormControl>
                        <Stack direction="row" spacing={2}>

                            <FormControl sx={{ flexGrow: 1 }}>
                                <Input size="sm" sx={{ flexGrow: 1 }} placeholder='Rua' />
                            </FormControl>
                            <FormControl >
                                <Input
                                    size="sm"
                                    sx={{ width: '100px' }}
                                    placeholder='Número'
                                />
                            </FormControl>
                        </Stack>




                    </Stack>
                    <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                            <Button size="sm" variant="outlined" color="neutral">
                                Cancel
                            </Button>
                            <Button size="sm" variant="solid">
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card >

                <Card>
                    <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography level="title-md">Deletar Minha  Conta</Typography>
                            <Typography level="body-sm">
                                Ao excluir sua conta, todos os seus dados serão perdidos.
                            </Typography>
                        </Box>

                        <Button size="sm" variant="outlined" color="danger">Deletar mina conta</Button>
                    </Box>



                </Card>
            </Stack >
        </Box >

    )
}
