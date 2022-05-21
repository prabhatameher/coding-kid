import { Box, Button, Icon, IconButton, Typography } from '@mui/material'
import React from 'react'
import FilledStart from '../images/filledStar.svg'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
import { Slide, Zoom, Fade,  Flip } from 'react-reveal';


const StarSx = {
    fontSize: '20px',
    color: '#FF463A'
}

const OurClass = () => {
    return (
        <>
            <Box height='596px' bgcolor='#FF463A' display='flex' flexDirection='column' id='class'>
                <Typography sx={{ color: '#fff', fontWeight: '700', fontSize: '36px', lineHeight: '50px', marginLeft: '100px', marginTop: '60px' }} >Our Class</Typography>

                <Flip top>
                    <Box display='flex' justifyContent='center' marginTop='52px' >
                        <Box height='115px' width='1166px' display='flex' justifyContent='space-between' style={{ background: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px 10px 0px 0px' }}>

                            <Box marginTop='16px' marginLeft='24px' display='flex' flexDirection='column'>
                                <Typography fontWeight='700' fontSize='20px' lineHeight='30px' color="#00235C">Beginner Class for 7-12 Years</Typography>
                                <Box display='flex' justifyContent='flex-start'>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarBorderIcon sx={StarSx} /></IconButton>
                                </Box>
                            </Box>

                            <Box display='flex' flexDirection='column' justifyContent='space-evenly'>
                                <Box display='flex' flexDirection='row'>
                                    <Typography fontSize='16px' fontWeight='400' lineHeight='25px' color='#00235C'>
                                        <IconButton >
                                            <LocalOfferOutlinedIcon style={{ color: '#00235C', fontSize: "19px" }} />
                                        </IconButton>
                                        $2000/Month
                                    </Typography>
                                    <Typography fontSize='16px' fontWeight='400' lineHeight='25px' color='#00235C' style={{ marginLeft: '28px' }}>
                                        <IconButton >
                                            <TimerOutlinedIcon style={{ color: '#00235C', fontSize: "19px" }} />
                                        </IconButton>
                                        6Meet/Session
                                    </Typography>
                                </Box>
                                <Box display='flex' flexDirection='row'>
                                    <Typography fontSize='16px' fontWeight='400' lineHeight='25px' color='#00235C'>
                                        <IconButton >
                                            <GroupOutlinedIcon style={{ color: '#00235C', fontSize: "19px" }} />
                                        </IconButton>
                                        8 Kids/Class
                                    </Typography>
                                    <Typography fontSize='16px' fontWeight='400' lineHeight='25px' color='#00235C' style={{ marginLeft: '28px' }}>
                                        <IconButton >
                                            <LaptopOutlinedIcon style={{ color: '#00235C', fontSize: "19px" }} />
                                        </IconButton>
                                        Online/Offline Meeting
                                    </Typography>
                                </Box>
                            </Box>

                            <Box display='flex' alignItems='center' marginRight='24px' >
                                <Button sx={{ bgcolor: '#116CFF', fontSize: '20px', lineHeight: '24px', color: '#fff', textTransform: 'none', padding: '13px 10px', borderRadius: '10px' ,'&:hover': { bgcolor: '#00235C', color: '#fff' } }}>Detail Class</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box bgcolor='#fff' height='260px' width='1166px' display='flex' flexDirection='column'>

                            <Box borderBottom={1} borderColor='#116CFF' height='65px' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box width='45%'>
                                    <Typography style={{ marginLeft: '24px' }} fontWeight='700' color='#116CFF' fontSize='20px' lineHeight='30px'>Intermediate Class for 7-12 Years</Typography>
                                </Box>
                                <Box display='flex' justifyContent='flex-start' width='35%'>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                </Box>
                                <Box width='20%' display='flex' justifyContent='flex-end'>
                                    <Typography style={{ marginRight: '24px' }} fontWeight='700' color='#00235C' fontSize='20px' lineHeight='30px'>$2500</Typography>
                                </Box>
                            </Box>

                            <Box borderBottom={1} borderColor='#116CFF' height='65px' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box width='45%'>
                                    <Typography style={{ marginLeft: '24px' }} fontWeight='700' color='#116CFF' fontSize='20px' lineHeight='30px'>Expert Class for &gt;12 Years</Typography>
                                </Box>
                                <Box display='flex' justifyContent='flex-start' width='35%'>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                </Box>
                                <Box width='20%' display='flex' justifyContent='flex-end'>
                                    <Typography style={{ marginRight: '24px' }} fontWeight='700' color='#00235C' fontSize='20px' lineHeight='30px'>$2900</Typography>
                                </Box>
                            </Box>

                            <Box borderBottom={1} borderColor='#116CFF' height='65px' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box width='45%'>
                                    <Typography style={{ marginLeft: '24px' }} fontWeight='700' color='#116CFF' fontSize='20px' lineHeight='30px'>Free Trial Class <span style={{ color: '#FF463A', fontSize: '14px', fontWeight: '500', lineHeight: '16.94px', backgroundColor: '#FFE6E5', padding: '4px 8px', marginLeft: '16px' }}>New</span></Typography>
                                </Box>
                                <Box display='flex' justifyContent='flex-start' width='35%'>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                    <IconButton ><StarIcon sx={StarSx} /></IconButton>
                                </Box>
                                <Box width='20%' display='flex' justifyContent='flex-end'>
                                    <Typography style={{ marginRight: '24px' }} fontWeight='700' color='#FF463A' fontSize='20px' lineHeight='30px'>FREE</Typography>
                                </Box>
                            </Box>
                            <Box height='65px' display='flex' justifyContent='space-between' alignItems='center'>
                                <Box width='45%'>
                                    <Typography style={{ marginLeft: '24px' }} fontWeight='700' color='#116CFF' fontSize='20px' lineHeight='30px'>Check All Class</Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Flip>
            </Box>
        </>
    )
}

export default OurClass