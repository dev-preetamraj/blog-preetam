import { Box, Chip, Divider, Grid, Paper, Stack, Typography } from "@mui/material";

const ServiceCard = ({title, icon, content, tech}) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{
                    width: '100%',
                    minHeight: '250px',
                    padding: 2,
                    cursor: 'pointer'
                }}
                elevation={2}
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    marginBottom: 3
                }}>
                    {icon}
                    <Typography variant="h5">
                        {title}
                    </Typography>
                </Box>
                <Typography variant="body3">
                    {content}
                </Typography>
                <Box sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                }}>
                    <Typography variant="h5">
                        Most Used Technologies
                    </Typography>
                    <Divider  sx={{marginY: 1}}/>
                    <Stack direction={{xs: 'column', md: 'row'}} spacing={{xs: 2, md: 1}}>
                        {
                            tech.map((item, index) => (
                                <Chip key={index} label={item} variant="outlined"/>
                            ))
                        }
                    </Stack>
                </Box>
            </Paper>
        </Grid>
    );
};

export default ServiceCard;