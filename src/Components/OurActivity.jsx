import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Beginner from '../images/beginner.png'
import Intermediate from '../images/intermediate.png'
import Expert from '../images/expert.png'
import { Slide, Zoom, Fade, Flip } from 'react-reveal';


const HoverEffect = {
    backgroundColor: '#fff',
    '&:hover': {
        backgroundColor: '#FFE6E5',
        border: '1px solid #FFE6E5 ',
        cursor: 'pointer',
    }
}


const OurActivity = () => {
    return (
        <>
            <Box height='796px' display='flex' flexDirection='column' id='activity'>
                <Typography color='#00235C' fontSize='36px' fontWeight='700' lineHeight='50px' style={{ margin: '60px 100px' }}>Our Activity</Typography>
                <Box display='flex' justifyContent='space-evenly' alignItems='center'>
                    <Box sx={{ '&:hover': { cursor: 'pointer' } }}>
                        <i class="fa-solid fa-chevron-left" style={{ color: "#fff", background: '#BCD6FF', padding: '7px 11px', borderRadius: '10px' }}></i>
                    </Box>
                    {/* Beginner Class */}
                    <Slide right cascade>
                        <Box height='574px' width='274px' border={1} borderColor='#FF463A' borderRadius='10px' display='flex' flexDirection='column' alignItems='flex-start' sx={HoverEffect}>
                            <Box padding='24px 24px' display='flex' justifyContent='center' >
                                <img src={Beginner} alt='beginner' height='416px' width='216px' style={{ borderRadius: '5px' }} />
                            </Box>
                            <Box padding='0 24px' fontSize='12px' fontWeight='700' color='#116CFF' lineHeight='30px'>Video</Box>
                            <Box padding='0 24px' fontSize='16px' fontWeight='400' color='#00235C' textAlign='justify' lineHeight='30px'>Amet minim mollit non deserunt ullamco est sit</Box>
                        </Box>

                        {/* Intermediate Class */}

                        <Box height='574px' width='274px' border={1} borderColor='#FF463A' borderRadius='10px' sx={HoverEffect} >
                            <Box padding='0 24px' marginTop='24px' fontSize='12px' fontWeight='700' color='#FF463A' lineHeight='30px'>Pictures</Box>
                            <Box padding='0 24px' my='10px' fontSize='16px' fontWeight='400' color='#00235C' textAlign='justify' lineHeight='30px'>Amet minim mollit non deserunt ullamco est sit</Box>
                            <Box padding='0 24px' display='flex' justifyContent='center'>
                                <img src={Intermediate} alt='beginner' height='416px' width='216px' style={{ borderRadius: '5px' }} />
                            </Box>
                        </Box>

                        {/* Expert Class */}
                        <Box height='574px' width='274px' border={1} borderColor='#FF463A' borderRadius='10px' sx={HoverEffect}>
                            <Box padding='24px 24px' display='flex' justifyContent='center'>
                                <img src={Expert} alt='beginner' height='416px' width='216px' style={{ borderRadius: '5px' }} />
                            </Box>
                            <Box padding='0 24px' fontSize='12px' fontWeight='700' color='#116CFF' lineHeight='30px'>Pictures</Box>
                            <Box padding='0 24px' fontSize='16px' fontWeight='400' color='#00235C' textAlign='justify' lineHeight='30px'>Amet minim mollit non deserunt ullamco est sit</Box>
                        </Box>
                    </Slide>
                    <Box sx={{ '&:hover': { cursor: 'pointer' } }}>
                        <i class="fa-solid fa-chevron-right" style={{ color: "#fff", background: '#116CFF', padding: '7px 11px', borderRadius: '10px' }}></i>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default OurActivity