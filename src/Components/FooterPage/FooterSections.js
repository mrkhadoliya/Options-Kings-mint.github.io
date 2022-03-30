import { Container, Grid, Typography, Box } from '@mui/material';
import React from 'react' 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styled from 'styled-components';

const OptionsKings = styled.div`
    padding: 3rem 0;
    background-color: #121212;
    color:#fff;
`
const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
const SocialIcon = styled.div`
    margin:10px;

`

 const socialtext = [
     { text: 'social media', variant:'h6' } 
 ]


const FooterSections = () => {
    return (
        <OptionsKings>
            <Container maxWidth="lg">
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={12} md={6} lg={6} margin="auto">
                        <Box textAlign="center">
                            <Box >
                                <img src='./img/logo512.png' width="50%" />
                            </Box>
                            {socialtext.map((heading) => ( 
                                <Typography key={heading.text} variant={heading.variant}> {heading.text} </Typography>
                            ))}
                            <SocialContainer>
                                <SocialIcon>
                                    <FacebookOutlinedIcon color="primary"/>
                                </SocialIcon> 
                                <SocialIcon>
                                    <InstagramIcon color="secondary"/>
                                </SocialIcon> 
                                <SocialIcon>
                                    <YouTubeIcon color="error"/>
                                </SocialIcon> 
                                <SocialIcon>
                                    <LinkedInIcon color="primary"/>
                                </SocialIcon> 
                            </SocialContainer>
                        </Box>
                    </Grid> 
                </Grid>
            </Container>
        </OptionsKings>
    )
}

export default FooterSections;