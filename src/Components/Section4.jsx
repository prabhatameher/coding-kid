import React from 'react'
import { Box, Typography } from '@mui/material'
import kidFun from '../images/kid-fun.svg'
import { Slide, Zoom, Fade } from 'react-reveal';


const Section4 = () => {
    return (
        <>
            <Box height='714px' display='flex' alignItems='center' flexWrap='wrap'>
                <Box marginLeft='100px'>
                    <Fade left >
                        <img src={kidFun} alt='img-2' />
                    </Fade>
                </Box>
                <Box marginLeft='86px'>
                    <Slide bottom>
                        <Typography sx={{ fontSize: '48px', fontWeight: '700', lineHeight: '60px', color: '#00235C' }}>Guaranteed Fun Curriculum for Children
                        </Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '40px', color: '#00235C', marginRight: '126px' }}>A computer science curriculum that makes coding easy to teach and
                            fun to learn. Students learn through video-based lessons, with
                            different themes like sports, art, and game design.</Typography>
                    </Slide>
                </Box>
            </Box>
        </>
    )
}

export default Section4