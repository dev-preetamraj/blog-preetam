import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const LeftDrawer = ({openDrawer, toggleDrawer}) => {
    const menuItem = [
        {
            text: 'Home',
            icon: (<HomeOutlinedIcon />)
        },
        {
            text: 'Blog',
            icon: (<BookOutlinedIcon />)
        },
        {
            text: 'About Us',
            icon: (<ContactsOutlinedIcon />)
        },
        {
            text: 'Contact Us',
            icon: (<EmailOutlinedIcon />)
        }
    ]
    return (
        <Drawer
            anchor="left"
            open={openDrawer}
            onClose={toggleDrawer}
        >
            <Box
                sx={{width: 250}}
                role="presentation"
            >
                <List>
                    {
                        menuItem.map((item, index) => (
                            <Box key={item.text}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </Box>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    );
};

export default LeftDrawer;