import fs from 'fs';
import path from 'path';
import { useEffect } from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'marked-react';
import Prism from 'prismjs';

import Layout from '../../src/hocs/Layout';
import { Avatar, Box, Divider, Grid, Typography } from '@mui/material';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const PostDetailPage = ({frontmatter: {title, excerpt, image, author, read_min, tags, published_at}, slug, content}) => {
    useEffect(() => {
        if(typeof window !== 'undefined'){
            Prism.highlightAll();
        }
    }, []);
    return (
        <Layout>
            <Grid container spacing={2} marginTop={2}>
                <Grid item xs={12} md={9}>
                    <Box>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: {xs: 'column', md: 'row'}, gap: 2}}>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2, width: '100%'}}>
                                <Avatar>P</Avatar>
                                <Box>
                                    <Typography variant='subtitle1'>{author}</Typography>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                        <Typography variant='caption'>{published_at}</Typography>
                                        <Typography variant='caption'>{read_min} min read</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: {xs: 'space-between', md: ''}, gap: 2, width: {xs: '100%', md: 'auto'}}}>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <TwitterIcon className='cursor-p' />
                                    <FacebookIcon className='cursor-p'/>
                                    <LinkedInIcon className='cursor-p' />
                                    <LinkIcon className='cursor-p'/>
                                </Box>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <BookmarkAddIcon className='cursor-p'/>
                                    <MoreHorizIcon className='cursor-p'/>
                                </Box>
                            </Box>
                        </Box>
                        <Typography variant='h4' sx={{marginTop: 5, marginBottom: 2}}>
                            {title}
                        </Typography>
                        <Typography variant='body1' sx={{color: '#999', marginY: 2}}>
                            {excerpt}
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
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, marginY: 5}}>
                        <FiberManualRecordOutlinedIcon fontSize='10px' />
                        <FiberManualRecordOutlinedIcon fontSize='10px' />
                        <FiberManualRecordOutlinedIcon fontSize='10px' />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
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