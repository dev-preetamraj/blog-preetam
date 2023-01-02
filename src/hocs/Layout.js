import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import {theme} from '../theme/theme';
import Navbar from '../components/Navbar'
import Head from "next/head";

const Layout = ({children, title}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <Container>
                {children}
            </Container>
        </ThemeProvider>
    );
};

export default Layout;