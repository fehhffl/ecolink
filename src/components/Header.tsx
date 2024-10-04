import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import { InputAdornment, ListItemIcon, TextField } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import InventoryIcon from '@mui/icons-material/Inventory'
import {
    Account,
} from '@toolpad/core'
import { useNavigate } from 'react-router-dom' // Para navegação
import SideBar from './SideBar'
import SearchIcon from '@mui/icons-material/Search'
import { useTheme } from '../App' // Importa o hook
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import AddIcon from '@mui/icons-material/Add'

export default function Header() {
    const navigate = useNavigate()
    const { isDarkMode, toggleTheme } = useTheme() // Usa o contexto de tema
    const handleNavigateToCreateDonate = () => {
        navigate('/create-donate') // Navega para a rota create-donate
    }
    function MenuItemsComponent() {

        return (
            <>
                <MenuItem onClick={() => navigate('/userProfile')}>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    Perfil do Usuário
                </MenuItem>
                <MenuItem onClick={() => navigate('/donation')}>
                    <ListItemIcon>
                        < InventoryIcon />
                    </ListItemIcon>

                    Minhas Doações
                </MenuItem>
            </>
        )
    }


    return (
        <Box
            sx={{
                gap: 2,
                bgcolor: 'background.surface',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gridColumn: '1 / -1',
                borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'sticky',
                top: 0,
                zIndex: 1100,
            }}
        >

            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SideBar></SideBar>

                    <TextField

                        variant="outlined"
                        size="small"
                        placeholder='Pesquisar doação...'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="create donation"
                            aria-haspopup="true"
                            onClick={handleNavigateToCreateDonate}
                            color="inherit"

                        >
                            <AddIcon />
                        </IconButton>
                    </Box>
                    <IconButton onClick={toggleTheme} color="inherit" sx={{ mr: 1 }}>
                        {isDarkMode.palette.mode === 'light' ? (
                            <DarkModeIcon sx={{ color: isDarkMode.palette.primary.main }} />
                        ) : (
                            <LightModeIcon sx={{ color: isDarkMode.palette.primary.main }} />
                        )}
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Account
                            slots={{
                                menuItems: MenuItemsComponent,
                            }}
                        />
                    </Box>


                </Box>
            </Toolbar>

        </Box>

    )
}
