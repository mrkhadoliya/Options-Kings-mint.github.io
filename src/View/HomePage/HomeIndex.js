import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { MainPage, BoxArea, BoxTop, BoxPic } from './IndexCs'


const headings = [ 
    {text:'Options Kings NFT Mint', varient:'h4'}, 
    {text:'Options Kings NFT Mint in 0.002 ETH', varient:'body1'}
];




const HomeIndex = () => {
    return (
        <MainPage className='mainpage'>
            <Container maxWidth="lg">
                <Grid container spacing={0}>
                    <Grid item xs={12} md={10} lg={10} margin="auto">
                        <BoxArea>
                            <Grid container spacing={2}> 
                                <Grid item xs={12} md={7} lg={7} margin="auto">
                                    <Box>
                                        {headings.map((heading) => ( 
                                            <Typography key={heading.text} variant={heading.varient} >{heading.text}</Typography> 
                                        ))}
                                        <BoxTop>
                                            <Button variant="contained" color="error"
                                            style={{width:'50%', boxShadow:'none', padding:'8px 20px', fontSize:'15px',}}
                                            >Mint NFT</Button>
                                        </BoxTop>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={5} lg={5} margin="auto"> 
                                    <BoxPic>
                                        <img src='./img/IMG_5366.gif' width="100%" style={{borderRadius:'30px'}} />
                                    </BoxPic>
                                </Grid>
                            </Grid>
                        </BoxArea>
                    </Grid>
                </Grid>
            </Container>
        </MainPage>
    )
}

export default HomeIndex;