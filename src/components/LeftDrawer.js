import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useRouter } from "next/router";

const LeftDrawer = ({openDrawer, toggleDrawer}) => {
    const router = useRouter();
    const menuItem = [
        {
            text: 'Home',
            nav_link: '/',
            icon: (<HomeOutlinedIcon />)
        },
        {
            text: 'Blog',
            nav_link: '/blog',
            icon: (<BookOutlinedIcon />)
        },
        {
            text: 'About Us',
            nav_link: '/about-us',
            icon: (<ContactsOutlinedIcon />)
        },
        {
            text: 'Contact Us',
            nav_link: '/contact-us',
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
                                    <ListItemButton onClick={() => router.push(item.nav_link)}>
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