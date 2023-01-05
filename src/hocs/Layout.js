import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import {theme} from '../theme/theme';
import Navbar from '../components/Navbar'
import Head from "next/head";
import SocialIconStack from "../components/SocialIconStack";

const Layout = ({children, title}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <SocialIconStack />
            <Container>
                {children}
            </Container>
        </ThemeProvider>
    );
};

export default Layout;