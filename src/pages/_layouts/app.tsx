
import React from 'react'
import { Outlet } from 'react-router-dom'
import IconButton from '@mui/joy/IconButton'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { useColorScheme } from '@mui/joy/styles'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Stack from '@mui/joy/Stack'
import Avatar from '@mui/joy/Avatar'
import Input from '@mui/joy/Input'
import Button from '@mui/joy/Button'
import Tooltip from '@mui/joy/Tooltip'
import Dropdown from '@mui/joy/Dropdown'
import Menu from '@mui/joy/Menu'
import MenuButton from '@mui/joy/MenuButton'
import MenuItem from '@mui/joy/MenuItem'
import ListDivider from '@mui/joy/ListDivider'
import Drawer from '@mui/joy/Drawer'
import ModalClose from '@mui/joy/ModalClose'
import DialogTitle from '@mui/joy/DialogTitle'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import InventoryIcon from '@mui/icons-material/Inventory'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import ComputerIcon from '@mui/icons-material/Computer'

export function AppLayout() {


    const handleNavigateToCreateDonate = () => {
        console.log('modal')
    }
    function ColorSchemeToggle() {
        const { mode, setMode } = useColorScheme()
        const [mounted, setMounted] = React.useState(false)
        React.useEffect(() => {
            setMounted(true)
        }, [])
        if (!mounted) {
            return <IconButton size="sm" variant="outlined" color="primary" />
        }
        return (
            <Tooltip title="Change theme" variant="outlined">
                <IconButton
                    data-screenshot="toggle-mode"
                    size="sm"
                    variant="plain"
                    color="neutral"
                    sx={{ alignSelf: 'center' }}
                    onClick={() => {
                        if (mode === 'light') {
                            setMode('dark')
                        } else {
                            setMode('light')
                        }
                    }}
                >
                    {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
                </IconButton>
            </Tooltip>
        )
    }
    const [open, setOpen] = React.useState(false)
    return (

        <div>
            <Box sx={{
                display: 'flex', flexGrow: 1, justifyContent: 'space-between', p: 2,
                gap: 2,
                bgcolor: 'background.surface',
                flexDirection: 'row',
                alignItems: 'center',
                gridColumn: '1 / -1',
                borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'sticky',
                top: 0,
                zIndex: 1100,
            }}>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: { xs: 'none', sm: 'flex' },
                    }}
                >
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', paddingRight: '20px', textDecoration: 'none' }} component={Link} to="/">
                        <IconButton variant="soft" color="primary" size="sm">
                            <ComputerIcon></ComputerIcon>
                        </IconButton>
                        <Typography level="title-lg">Donatech </Typography>

                    </Box>
                    <Button
                        variant="plain"
                        color="neutral"
                        aria-pressed="true"
                        component="a"
                        href=""
                        size="sm"
                        sx={{ alignSelf: 'center', }}
                    >
                        Home
                    </Button>
                    <Button
                        variant="plain"
                        color="neutral"
                        aria-pressed="false"
                        component="a"
                        href="/sobre"
                        size="sm"
                        sx={{ alignSelf: 'center' }}
                    >
                        Sobre nos
                    </Button>
                    <Input
                        size="sm"
                        variant="outlined"
                        placeholder="Procure por doações…"
                        startDecorator={<SearchRoundedIcon color="primary" />}
                        sx={{
                            alignSelf: 'center',
                            display: {
                                xs: 'none',
                                sm: 'flex',
                            },
                        }}
                    />
                    <IconButton
                        size="sm"
                        variant="outlined"
                        color="neutral"
                        sx={{ display: { xs: 'inline-flex', sm: 'none' }, alignSelf: 'center' }}
                    >
                        <SearchRoundedIcon />
                    </IconButton>
                </Stack>
                <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
                    <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
                        <MenuRoundedIcon />
                    </IconButton>
                    <Drawer
                        sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
                        open={open}
                        onClose={() => setOpen(false)}
                    >
                        <ModalClose />
                        <DialogTitle>Acme Co.</DialogTitle>
                        <Box sx={{ px: 1 }}>
                            teste
                        </Box>
                    </Drawer>

                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 1.5,
                        alignItems: 'center',
                    }}
                >

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton

                            onClick={handleNavigateToCreateDonate}


                        >
                            <AddIcon />
                        </IconButton>
                    </Box>
                    <ColorSchemeToggle />
                    <Dropdown>
                        <MenuButton
                            variant="plain"
                            size="sm"
                            sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}
                        >
                            <Avatar
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                sx={{ maxWidth: '32px', maxHeight: '32px' }}
                            />
                        </MenuButton>
                        <Menu
                            placement="bottom-end"
                            size="sm"
                            sx={{
                                zIndex: '99999',
                                p: 1,
                                gap: 1,
                                '--ListItem-radius': 'var(--joy-radius-sm)',
                            }}
                        >
                            <MenuItem>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                        sx={{ borderRadius: '50%' }}
                                    />
                                    <Box sx={{ ml: 1.5 }}>
                                        <Typography level="title-sm" textColor="text.primary">
                                            Rick Sanchez
                                        </Typography>
                                        <Typography level="body-xs" textColor="text.tertiary">
                                            rick@email.com
                                        </Typography>
                                    </Box>
                                </Box>
                            </MenuItem>
                            <ListDivider />
                            <MenuItem component={Link} to="/perfil">
                                <AccountCircleIcon />
                                Meu perfil
                            </MenuItem>
                            <MenuItem component={Link} to="/mydonations">
                                <InventoryIcon />
                                Doações
                            </MenuItem>


                            <MenuItem>
                                <LogoutRoundedIcon />
                                Log out
                            </MenuItem>
                        </Menu>
                    </Dropdown>
                </Box>
            </Box>

            <Outlet />
        </div>

    )
}