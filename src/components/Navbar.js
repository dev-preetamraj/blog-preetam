import { useState } from "react";
import { 
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    styled
} from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from "next/link";
import LeftDrawer from "./LeftDrawer";


const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setOpenDrawer(false);
    };
    const logo_url = 'https://blog-preetam.vercel.app/favicon.ico' || 'http://127.0.0.1:3000/favicon.ico';
    return (
        <AppBar position="sticky">
            <Toolbar disableGutters>
                <Container
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <LeftDrawer openDrawer={openDrawer} toggleDrawer={toggleDrawer}/>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <StyledLogo
                            src={logo_url}
                            alt="Logo"
                        />
                        <Typography variant="h3" sx={{fontFamily: 'Stylish', display: {xs: 'none', sm: 'block'}}}>Preetam</Typography>
                    </Box>
                    {
                        openDrawer ? (
                            <CloseOutlinedIcon />
                        ) : (
                            <MenuOutlinedIcon
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                    cursor: 'pointer'
                                }}
                                onClick={() => setOpenDrawer(true)}
                            />
                        )
                    }
                    <Box 
                        sx={{
                            display: {xs: 'none', md: 'flex'},
                            alignItems: 'center',
                            gap: 2
                        }}
                    >
                        <StyledLink>
                            <Link className="link" href='/'>Home</Link>
                        </StyledLink>
                        <StyledLink>
                            <Link className="link" href='/blog'>Blog</Link>
                        </StyledLink>
                        <StyledLink>
                            <Link className="link" href='/about-us'>About Us</Link>
                        </StyledLink>
                        <StyledLink>
                            <Link className="link" href='/contact-us'>Contact Us</Link>
                        </StyledLink>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

const StyledLink = styled(Typography)(({theme}) => ({
    cursor: 'pointer',

    '.link': {
        textDecoration: 'none',
        color: theme.palette.text.primary
    },

    '.active': {
        border: `1px solid ${theme.palette.primary.dark}`,
        paddingInline: 10,
        paddingBlock: 5,
        borderRadius: 5,
        color: '#fff'
    }
}));

const StyledLogo = styled('img')(() => ({
    height: '3rem',
    cursor: 'pointer'
}));