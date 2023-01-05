import { Paper, styled } from "@mui/material";
import Link from "next/link";

const SocialIcon = ({icon, link_to}) => {
    return (
        <Link href={link_to} target='_blank' rel="noopener noreferrer">
            <StyledPaper>
                {icon}
            </StyledPaper>
        </Link>
    );
};

export default SocialIcon;

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