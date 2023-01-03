import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#9155FD',
            dark: '#a777fd'
        },
        text: {
            primary: 'rgba(231, 227, 252, 0.87)'
        }
    },
    typography: {
        body3: {
            fontFamily: "'Source Sans Pro', sans-serif",
            fontWeight: 300
        }
    }
});