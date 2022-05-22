import { Box, Button, } from '@mui/material'
import React from 'react'
// import logo from '../images/coding-kid-logo.png'
import logo from '../images/coding-kid-logo-svg.svg'
import kidWithLaptop from '../images/header-left.svg'
import { Zoom, Slide } from 'react-reveal';

const HoverEffect = {
    '&:hover': {
        cursor: 'pointer',
    }
}

const Header = () => {

    function scrollToTestDiv(id) {
        const divElement = document.getElementById(id);
        divElement.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Box bgcolor='#116CFF' height='728px'>
                {/* inline nav  */}
                <Slide down>
                    <Box display='flex' justifyContent='space-between'>
                        <Box my='42px' marginLeft='100px'>
                            <img src={logo} alt='alt-logo' />
                        </Box>
                        <Box display='flex' width='40%' justifyContent='space-between' my='50px' fontSize='16px' color='#fff'>
                            <Box sx={HoverEffect} fontWeight='700'>Home</Box>
                            <Box sx={HoverEffect} onClick={() => scrollToTestDiv('class')}>Class</Box>
                            <Box sx={HoverEffect} onClick={() => scrollToTestDiv('activity')}>Our Activity</Box>
                            <Box sx={HoverEffect} onClick={() => scrollToTestDiv('contact')}>Contact us</Box>
                        </Box>
                        <Box my='42px' marginRight='100px'>
                            <Button variant='contained' sx={{ bgcolor: '#fff', color: '#116CFF', padding: '10px 30px', borderRadius: '10px', textTransform: 'none', fontWeight: '700', fontSize: '16px', '&:hover': { bgcolor: '#00235C', color: '#fff' } }}>Login</Button>
                        </Box>
                    </Box>
                </Slide>

                <Box display='flex' justifyContent='space-between'>
                    <Box marginLeft='100px' marginTop='55px' color='#fff'>
                        <Slide left>
                            <Box lineHeight='160%' fontSize='50px' fontWeight='800'>Learn Coding For <br /> Kids From Anywhere</Box>
                            <Box lineHeight='180%' fontSize='18px' fontWeight='500'>Discover the best coding course for your kids. <br /> Learn Coding from basic.</Box>
                            <Box marginTop='32px'>
                                <Button variant='contained' size='large' sx={{ fontSize: '20px', padding: '15px 45px', bgcolor: '#fff', color: '#116CFF', textTransform: 'none', fontWeight: '700', lineHeight: '24.2px', borderRadius: '10px', '&:hover': { bgcolor: '#00235C', color: '#fff' } }}>Book a Class</Button>
                                <Button variant='outlined' size='large' sx={{ fontSize: '20px', padding: '15px 45px', color: '#fff', textTransform: 'none', fontWeight: '700', lineHeight: '24.2px', borderRadius: '10px', borderColor: "#fff", marginLeft: '24px', '&:hover': { borderColor: '#fff' } }}>Learn More</Button>
                            </Box>
                        </Slide>
                    </Box>
                    <Box marginRight='100px'>
                        <Zoom>
                            <img src={kidWithLaptop} alt='kid' height='400px' />
                        </Zoom>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Header