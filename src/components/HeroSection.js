import { Download } from "@mui/icons-material";
import { Box, Button, Grid, styled, Typography, useTheme } from "@mui/material";

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
                    I am a <span style={{fontSize: '2.5rem', fontFamily: "'Rubik Bubbles', cursive"}}>Web<span style={{fontFamily: "'Roboto', sans-serif"}}>/</span>App Developer</span>
                </Typography>
                <InfoBox sx={{display: {xs: 'none', md: 'flex'}}}>
                    <Typography variant="body3">
                        I am from Patna, Bihar. I am currently a student pursuing B.Tech with majors in Mechanical Engineering and minors in Computer Science and Engineering at Indian Institute of Technology Mandi.
                    </Typography>
                    <Button endIcon={<Download />} variant='contained' color="primary">Download Resume</Button>
                </InfoBox>
            </TitleGrid>
            <ImageGrid xs={12} md={6}>
                <StyledImg
                    src='/images/my-image.png'
                    alt="Preetam"
                    sx={{
                        width: {sm: '60%', md: '100%'}
                    }}
                />
            </ImageGrid>
            <InfoBox sx={{display: {xs: 'flex', md: 'none'}}}>
                <Typography variant="body3" sx={{textAlign: 'center'}}>
                    I am from Patna, Bihar. I am currently a student pursuing B.Tech with majors in Mechanical Engineering and minors in Computer Science and Engineering at Indian Institute of Technology Mandi.
                </Typography>
                <Button endIcon={<Download />} variant='contained' color="primary">Download Resume</Button>
            </InfoBox>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const InfoBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20
}));

const StyledImg = styled('img')(() => ({
    width: '100%',
    aspectRatio: '1/1',
    objectFit: 'cover'
}));