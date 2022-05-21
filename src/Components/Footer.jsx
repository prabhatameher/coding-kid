import { Box, Typography } from '@mui/material'
import React from 'react'
import FooterStar from '../images/footer-star.svg'
import logo2 from '../images/logo2.svg'
import { Slide, Zoom, Fade, Flip, Roll } from 'react-reveal';


const TypographySx = {
    fontSize: '16px',
    fontWeight: '600',
    letterSpacing: '0.02em',
    lineHeight: '18px',
    padding: '15px 0'

}


const Footer = () => {
    return (
        <>
            <Box bgcolor='#00235C' height='362px' display='flex' color='#fff'>
                <Box width='463px' style={{ backgroundImage: `url(${FooterStar})`, backgroundPosition: 'center', backgroundSize: "463px 471px" }}>
                    <Box display='flex' flexDirection='column' height='60%' marginTop='88px' justifyContent='space-evenly' textAlign='left' marginLeft='100px'>
                        <Box>
                            <img src={logo2} height='37px' alt='logo' />
                        </Box>
                        <Typography fontSize='16px' fontWeight='600' lineHeight='18px'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Typography>
                        <Typography fontSize='16px' fontWeight='600' lineHeight='18px'>coding.kid@example.com</Typography>
                        <Slide left >
                            <Box display='flex' justifyContent='space-between' width='180px'>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-google"></i>
                            </Box>
                        </Slide>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='space-around' alignItems='flex-start' marginTop='88px' marginLeft='164px' marginRight='100px' height='60%' width='600px'>
                    {/* <Slide bottom> */}
                    <Box display='flex' flexDirection='column' justifyContent='space-evenly' >
                        <Typography sx={TypographySx} color='#116CFF'>Company</Typography>
                        <Typography sx={TypographySx} >About</Typography>
                        <Typography sx={TypographySx} >Contact</Typography>
                        <Typography sx={TypographySx} >FAQ</Typography>
                    </Box>

                    <Box display='flex' flexDirection='column' justifyContent='space-evenly'>
                        <Typography sx={TypographySx} color='#116CFF'>Our Class</Typography>
                        <Typography sx={TypographySx} >Beginner Class</Typography>
                        <Typography sx={TypographySx} >Intermediate Class</Typography>
                        <Typography sx={TypographySx} >Expert Class</Typography>
                    </Box>

                    <Box display='flex' flexDirection='column' justifyContent='space-evenly'>
                        <Typography sx={TypographySx} color='#116CFF'>Information</Typography>
                        <Typography sx={TypographySx} >Registration</Typography>
                        <Typography sx={TypographySx} >Free Trial Class</Typography>
                        <Typography sx={TypographySx} >Teacher</Typography>
                    </Box>

                    <Box display='flex' flexDirection='column' justifyContent='space-evenly'>
                        <Typography sx={TypographySx} color='#116CFF'>Our Activity</Typography>
                        <Typography sx={TypographySx} >Gallery</Typography>
                    </Box>
                    {/* </Slide> */}
                </Box>

            </Box>
        </>
    )
}

export default Footer