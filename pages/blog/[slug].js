import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'marked-react';
import Prism from 'prismjs';

import Layout from '../../src/hocs/Layout';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';

const PostDetailPage = ({frontmatter: {title, image, author, published_at}, slug, content}) => {
    useEffect(() => {
        if(typeof window !== 'undefined'){
            Prism.highlightAll();
        }
    }, []);
    return (
        <Layout>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={9}>
                    <Box>
                        <Typography variant='h4' textAlign='center' sx={{marginTop: 1}}>
                            {title}
                        </Typography>
                        <img 
                            src={image}
                            style={{
                                width: '100%',
                                objectFit: 'cover',
                                aspectRatio: '16/9',
                                marginTop: 10
                            }}
                        />
                        <Divider sx={{marginY: 2}}/>
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                    Right Side Bar
                </Grid>
            </Grid>
        </Layout>
    );
};

export default PostDetailPage;

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));
    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async ({params: {slug}}) => {
    const markdownWithData = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf-8');
    const {data: frontmatter, content} = matter(markdownWithData);
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
};