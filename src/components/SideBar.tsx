import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { styled, useTheme } from '@mui/material/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import HomeIcon from '@mui/icons-material/Home'
import InventoryIcon from '@mui/icons-material/Inventory'
import { Link } from 'react-router-dom'

export default function SideBar() {
    const [open, setOpen] = React.useState(false)
    const theme = useTheme()

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        backgroundColor: theme.palette.background.default,

    }))
    const DrawerList = (
        <Box sx={{
            width: 270, backgroundColor: theme.palette.background.default, height: '100%', borderBottom: '1px solid',
            borderRight: '1px solid',
            borderColor: 'divider',
        }} role="presentation" onClick={toggleDrawer(false)}>
            <List >

                <ListItem key="home" disablePadding>

                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon></HomeIcon>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>

                </ListItem>
                <ListItem key="user" disablePadding>
                    <ListItemButton component={Link} to="/profile" >
                        <ListItemIcon>
                            <AccountCircleIcon></AccountCircleIcon>
                        </ListItemIcon>
                        <ListItemText primary="User" />
                    </ListItemButton>

                </ListItem>
                <ListItem key="donate" disablePadding>
                    <ListItemButton component={Link} to="/donation" >
                        <ListItemIcon>
                            < InventoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Donate" />
                    </ListItemButton>

                </ListItem>
            </List>


        </Box >
    )

    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                edge="start"
                sx={[
                    {
                        mr: 2,
                    },
                    open && { display: 'none' },
                ]}
            >
                <MenuIcon />
            </IconButton>

            <Drawer open={open} onClose={toggleDrawer(false)} >
                <DrawerHeader sx={{
                    borderBottom: '1px solid',
                    borderRight: '1px solid',
                    borderColor: 'divider',
                }}>
                    <IconButton onClick={toggleDrawer(false)}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                {DrawerList}
            </Drawer>
        </div>
    )
}
