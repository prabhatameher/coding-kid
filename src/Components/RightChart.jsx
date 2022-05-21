import { IconButton, Typography } from '@mui/material'
import { Box, fontSize } from '@mui/system'
import React from 'react'
import rightChart from '../images/rightChat.svg'
import StarIcon from '@mui/icons-material/Star';

const StarSx = {
    fontSize: '20px',
    color: '#FF463A'
}

const RightChart = ({ name, age, url }) => {
    return (
        <>
            <Box display='flex'  >

                {/* CHAT SECTION */}
                <Box display='flex' style={{ display: 'inline', textAlign: 'center', position: 'relative' }}>
                    <img src={rightChart} alt='chat' width='440px' height='187px' />
                    <Box display='flex' flexDirection='column' textAlign='left' style={{ position: 'absolute', top: 30, marginLeft: '40px' }}>
                        <Box>
                            <Typography color='#00235C' fontSize='21px' fontWeight='700' >{name} <span style={{ fontWeight: 'normal' }}> ({age} Year)</span></Typography>
                        </Box>
                        <Box>
                            <IconButton><StarIcon sx={StarSx} /></IconButton>
                            <IconButton><StarIcon sx={StarSx} /></IconButton>
                            <IconButton><StarIcon sx={StarSx} /></IconButton>
                            <IconButton><StarIcon sx={StarSx} /></IconButton>
                            <IconButton><StarIcon sx={StarSx} /></IconButton>
                        </Box>
                        <Box width='392px'>
                            <Typography style={{ color: '#00235C', letterSpacing: '.5px', fontSize: '19px', lineHeight: '30px' }}><span style={{ color: '#FF463A', fontSize: '32px', fontWeight: '700' }}>“</span>Exercitation veniam consequat sunt  nostrud amet. <span style={{ color: '#FF463A', fontSize: '32px', fontWeight: '700' }}>”</span></Typography>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <img src={url} alt='child' style={{ border: '5px solid #fff', borderRadius: '50%' }} />
                </Box>
            </Box>
        </>
    )
}

export default RightChart