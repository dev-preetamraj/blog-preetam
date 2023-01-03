import { Avatar, Box, Button, CircularProgress, Divider, Grid, styled, Typography, useTheme } from "@mui/material";
import ReadMoreOutlinedIcon from '@mui/icons-material/ReadMoreOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useRouter } from "next/router";
import { useState } from "react";

const BlogCardFlat = ({post: {frontmatter: {title, excerpt, image, author, published_at}, slug}}) => {
    const theme = useTheme()
    const router = useRouter();
    const truncateText = (text) => {
        if(text.length < 121) return text;
        return `${text.substring(0,120)} ...`;
    };

    const [clicked, setClicked] = useState(false);
    const handleRouting = () => {
        setClicked(!clicked);
        router.push(`/blog/${slug}`);
    };

    return (
        <>
            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={9}>
                    <AuthorBox>
                        <Avatar sx={{width: 25, height: 25}}>P</Avatar>
                        <Typography variant="subtitle2">{author}</Typography>
                        <span>|</span>
                        <Typography variant="caption">{published_at}</Typography>
                    </AuthorBox>
                    <ContentBox>
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="body3">
                            {truncateText(excerpt)}
                        </Typography>
                    </ContentBox>
                    <FooterBox>
                        <Button
                            sx={{color: theme.palette.text.primary}}
                            endIcon={clicked ? <CircularProgress size={15}/> : <ReadMoreOutlinedIcon />}
                            onClick={handleRouting}    
                        >
                            {
                                clicked ? (
                                    <Typography variant="caption">Redirecting ...</Typography>
                                ) : (
                                    <Typography variant="caption">Read More</Typography>
                                )
                            }
                        </Button>
                        <Divider orientation="vertical" flexItem />
                        <TagBox>
                            <Button>
                                <Typography variant="caption" color={theme.palette.text.primary}>
                                    Python
                                </Typography>
                            </Button>
                        </TagBox>
                        <MenuIconBox>
                            <BookmarkAddOutlinedIcon className="footer-icon" />
                            <ShareOutlinedIcon className="footer-icon" />
                            <MoreHorizOutlinedIcon className="footer-icon" />
                        </MenuIconBox>
                    </FooterBox>
                </Grid>
                <Grid item xs={3}>
                    <img src={image} style={{width: '100%', aspectRatio: '1/1', objectFit: 'cover'}} />
                </Grid>
            </Grid>
            <Divider sx={{marginY: 3}} />
        </>
    );
};

export default BlogCardFlat;

const AuthorBox = styled(Box)(() => ({
    marginBottom: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 10
}));

const ContentBox = styled(Box)(() => ({
    marginBlock: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 5
}));

const FooterBox = styled(Box)(() => ({
    marginBlock: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 10
}));
const TagBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: 10
}));

const MenuIconBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 50,
    gap: 10,

    '.footer-icon': {
        cursor: 'pointer',
        height: 20,
        width: 20
    }
}));