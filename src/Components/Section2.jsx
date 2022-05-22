import { Box, Typography } from '@mui/material'
import React from 'react'
import kidGaming from '../images/kid-gaming.svg'
import { Slide, Zoom } from 'react-reveal';


const Section2 = () => {
    return (
        <>
            <Box height='714px' display='flex' alignItems='center'>
                <Box marginLeft='45px'>
                    <Zoom>
                        <img src={kidGaming} alt='img-2' />
                    </Zoom>
                </Box>
                <Box>
                    <Slide top cascade>
                        <Typography sx={{ fontSize: '48px', fontWeight: '700', lineHeight: '60px', color: '#00235C' }}>Increases Logical Thinking with Coding Class</Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: '400', lineHeight: '40px', color: '#00235C', marginRight: '177px' }}>Having logical thinking skills encourages kids to think for themselves, to
                            question assumptions, to develop their own theories, and to test their
                            theories against known facts. These thinking skills are transferable to all
                            situations.</Typography>
                    </Slide>
                </Box>
            </Box>
        </>
    )
}

export default Section2