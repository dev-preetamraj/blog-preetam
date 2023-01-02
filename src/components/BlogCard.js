import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { useRouter } from "next/router";

const BlogCard = ({post}) => {
    const router = useRouter();

    const truncateText = (text) => {
        if(text.length < 121) return text;
        return `${text.substring(0,120)} ...`;
    };
    
    return (
        <Grid item xs={12} sm={6} md={4}>
            <CardActionArea>
                <Card sx={{maxWidth: 375, minHeight: 400}} onClick={() => router.push(`blog/${post.slug}`)}>
                    <CardMedia 
                        component='img'
                        height={200}
                        image={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        sx={{objectFit: 'contain', aspectRatio: '16/9', marginTop: 1}}
                    />
                    <CardContent>
                        <Typography variant="h5" marginBottom={2}>
                            {post.frontmatter.title}
                        </Typography>
                        <Typography variant="body2">
                            {truncateText(post.frontmatter.excerpt)}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
};

export default BlogCard;