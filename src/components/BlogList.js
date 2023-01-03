import { Typography, Box, Grid, Divider } from "@mui/material";
import BlogCard from "./BlogCard";
import BlogCardFlat from "./BlogCardFlat";

const BlogList = ({posts}) => {
    
    return (
        <Box sx={{marginY: 5}}>
            <Typography variant="h5">
                Latest from My Blog
            </Typography>
            <Divider sx={{marginY: 2}} />
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    {
                        posts.map((post) => (
                            <BlogCardFlat post={post} key={post.slug} />
                        ))
                    }
                </Grid>
                <Grid item md={4} display={{xs: 'none', md: 'flex'}}>
                    Right Bar
                </Grid>
            </Grid>
        </Box>
    );
};

export default BlogList;