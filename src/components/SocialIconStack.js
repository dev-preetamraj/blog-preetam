import { Box, styled } from "@mui/material";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter,  } from "@mui/icons-material";
import SocialIcon from "./SocialIcon";

const SocialIconStack = () => {
    return (
        <StyledBox>
            <SocialIcon icon={<LinkedIn />} link_to='https://www.linkedin.com/in/iitianpreetam/' />
            <SocialIcon icon={<GitHub />} link_to='https://github.com/iitianpreetam' />
            <SocialIcon icon={<Facebook />} link_to='https://facebook.com/iitianpreetam' />
            <SocialIcon icon={<Instagram />} link_to='https://instagram.com/dev.preetamraj' />
            <SocialIcon icon={<Twitter />} link_to='https://twitter.com/iitianpreetam' />
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