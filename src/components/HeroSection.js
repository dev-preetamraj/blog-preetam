import { Grid, styled, Typography, useTheme } from "@mui/material";

const HeroSection = () => {
    const theme = useTheme();
    return (
        <Grid container spacing={1}>
            <TitleGrid item xs={12} md={6}>
                <Typography
                    sx={{textAlign: 'center'}}
                    variant='h5'
                >
                    Hello, <span style={{color: theme.palette.primary.dark}}>My Name is</span>
                </Typography>
                <Typography
                    sx={{textAlign: 'center'}}
                    variant='h1'
                >
                    <span style={{color: theme.palette.primary.dark, fontFamily: 'Stylish'}}>Preetam</span> Raj
                </Typography>
                <Typography
                    sx={{textAlign: 'center'}}
                    variant='h5'
                >
                    I am a <span style={{fontSize: '2.5rem', fontFamily: "'Rubik Bubbles', cursive"}}>Web Developer</span>
                </Typography>
            </TitleGrid>
            <ImageGrid xs={12} md={6}>
                <img src='/images/my-image.png' alt="Preetam" className="img" />
            </ImageGrid>
        </Grid>
    );
};

export default HeroSection;

const TitleGrid = styled(Grid)(() => ({
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
}));

const ImageGrid = styled(Grid)(() => ({
    '.img': {
        width: '100%',
        aspectRatio: '1/1',
        objectFit: 'cover'
    }
}));