import { Box, Grid, Typography, useTheme } from "@mui/material";
import LaptopIcon from '@mui/icons-material/Laptop';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ServiceCard from "./ServiceCard";

const Services = () => {
    const theme = useTheme();
    return (
        <Box sx={{marginTop: {xs: 1, sm: 15}, marginBottom: 2}}>
            <Typography variant='h3' sx={{textAlign: 'center', fontFamily: 'Stylish'}}>
                WHAT I DO
            </Typography>
            <Typography variant="body1" sx={{textAlign: 'center', color: theme.palette.primary.dark}}>
                MY <span style={{fontSize: '2rem', fontFamily: 'Stylish', color: theme.palette.text.primary}}>Services</span>
            </Typography>
            <Grid container spacing={2} marginTop={1}>
                <ServiceCard
                    title='Web Development'
                    icon={<LaptopIcon />}
                    content='I use to develop full stack web application using various backend and frontend technologies. Webapps which I create have some features like responsiveness, scalled for large user, etc.'
                    tech={['Django', 'DRF', 'ReactJS', 'NextJS']}
                />
                <ServiceCard
                    title='App Development'
                    icon={<PhoneAndroidIcon />}
                    content='I create native mobile app using React Native which is for both Android and iOS. Apps are scalable and for large userbase. The apps are responsive for every mobile screen and devices.'
                    tech={['React Navive']}
                />
                <ServiceCard 
                    title='Graphics Design'
                    icon={<RocketLaunchIcon />}
                    content='With some little knowledge of Photoshop and other graphics designing tool, I play around and create logos for websites and other graphical products like UI of my own website and photo editing.'
                    tech={['Photoshop', 'Canva', 'Figma']}
                />
            </Grid>
        </Box>
    );
};

export default Services;