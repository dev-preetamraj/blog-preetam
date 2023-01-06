import { Box, Grid, Typography } from "@mui/material";

const Experience = () => {
    return (
        <Box sx={{marginY: 2}}>
            <Typography variant='h3' sx={{textAlign: 'center', fontFamily: 'Stylish', marginBottom: 2}}>
                Professional Experience
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={5}>
                    <Typography variant="h5" textAlign='center'>
                        Internship at GrayQuest (SDE)
                    </Typography>
                    <ol>
                        <li>
                            <Typography variant="body3">
                                Worked with Socket Programming, Django Channels for server-side and JS for client-side socket which was capable of establishing the real time messaging service with authentication.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body3">
                                Fixed some bugs related to bulk file download as zip and optimise some code base of main API of the company which was created using Django Rest Framework.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body3">
                                Worked with AWS S3 Bucket which was used for file storage and RDS MySql for Database.
                            </Typography>
                        </li>
                    </ol>
                </Grid>
                <Grid item xs={12} md={7} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img
                        src="/images/coding.png"
                        alt="cloud"
                        style={{
                            width: '60%',
                            aspectRatio: '1/1',
                            objectFit: 'cover'
                        }}    
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Experience;