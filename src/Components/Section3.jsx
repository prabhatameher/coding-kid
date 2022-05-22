import { Box, Typography } from '@mui/material'
import React from 'react'
import kidConvocation from '../images/kid-convocation.svg'
import { Slide, Zoom } from 'react-reveal';


const Section3 = () => {
    return (
        <>
            <Box height='714px' bgcolor='#1B8238' display='flex' alignItems='center' flexWrap='wrap-reverse'>
                <Box marginLeft='100px'>
                    <Slide left >
                        <Typography sx={{ fontSize: '48px', fontWeight: '700', lineHeight: '60px', color: '#fff' }}>Preparing Your Kids For
                            The Future With
                            Experienced Teacher</Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '40px', color: '#fff', marginTop: '18px' }}>Having logical thinking skills encourages kids to think for themselves, to
                            question assumptions, to develop their own theories, and to test their
                            theories against known facts. These thinking skills are transferable to all
                            situations.</Typography>
                    </Slide>
                </Box>
                <Box marginRight='100px'>
                    <Slide right>
                        <img src={kidConvocation} alt='img-2' />
                    </Slide>
                </Box>
            </Box>
        </>
    )
}

export default Section3