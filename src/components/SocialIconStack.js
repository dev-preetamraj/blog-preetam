import { Box, Paper, styled } from "@mui/material";
import { CloseOutlined, Facebook, GitHub, Instagram, LinkedIn, Settings, Twitter,  } from "@mui/icons-material";
import SocialIcon from "./SocialIcon";
import { useState } from "react";

const SocialIconStack = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <StyledBox>
            <StyledPaper onClick={() => setClicked(!clicked)}>
                {
                    clicked ? <CloseOutlined /> : <Settings />
                }
            </StyledPaper>
            {
                clicked && (
                    <>
                        <SocialIcon icon={<LinkedIn />} link_to='https://www.linkedin.com/in/iitianpreetam/' />
                        <SocialIcon icon={<GitHub />} link_to='https://github.com/iitianpreetam' />
                        <SocialIcon icon={<Facebook />} link_to='https://facebook.com/iitianpreetam' />
                        <SocialIcon icon={<Instagram />} link_to='https://instagram.com/dev.preetamraj' />
                        <SocialIcon icon={<Twitter />} link_to='https://twitter.com/iitianpreetam' />
                    </>
                )
            }
        </StyledBox>
    );
};

export default SocialIconStack;

const StyledBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    position: 'fixed',
    left: 0,
    top: '30%',
    zIndex: 1000
}));

const StyledPaper = styled(Paper)(({theme}) => ({
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.primary,
    cursor: 'pointer',
    transition: 'all .8s ease',

    ':hover': {
        width: 80
    }
}));