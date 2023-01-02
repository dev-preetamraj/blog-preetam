import { Typography, Box, Grid, Divider } from "@mui/material";
import BlogCard from "./BlogCard";

const BlogList = ({posts}) => {
    
    return (
        <Box marginTop={0.5}>
            <Typography variant="h4">
                Latest from Our Blog
            </Typography>
            <Divider sx={{marginY: 2}} />
            <Grid container spacing={2}>
                {
                    posts.map((post) => (
                        <BlogCard post={post} key={post.slug} />
                    ))
                }
            </Grid>
        </Box>
    );
};

export default BlogList;