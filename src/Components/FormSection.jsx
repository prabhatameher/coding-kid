import { Button, InputBase, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SingleStar from '../images/single-star.svg'
import { Slide, Zoom, Fade, Flip, Roll } from 'react-reveal';


const FormSection = () => {
    return (
        <>
            <Box height='650px' display='flex' flexDirection='column' alignItems='center' id='contact'>
                <Box display='flex' justifyContent='center' flexFDirection='row' >
                    <Roll top>
                        <img src={SingleStar} alt='star' height='94px' width='63px' style={{ marginRight: '28px' }} />
                    </Roll>
                    <Box width='411px' height='96px' marginTop='60px'>
                        <Typography fontSize='36px' fontWeight='700' lineHeight='50px' textAlign='center' color='#00235C' >Ready to start your Kid journey?</Typography>
                    </Box>
                    <Zoom>
                        <img src={SingleStar} alt='star' height='59px' width='39px' style={{ marginLeft: '38px', marginTop: '88px' }} />
                    </Zoom>
                </Box>
                <Zoom >
                    <Box width='550px' marginTop='24px' height='418px' display='flex' flexDirection='column' justifyContent='space-between'   >
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography fontSize='16px' fontWeight='600' lineHeight='25px' color='#00235C'>Email : </Typography>
                            <InputBase sx={{ border: '1px solid #BCD6FF', borderRadius: '10px', width: '394px', height: '52px', paddingLeft: '20px' }} />
                        </Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography fontSize='16px' fontWeight='600' lineHeight='25px' color='#00235C' >Parents Name : </Typography>
                            <InputBase sx={{ border: '1px solid #BCD6FF', borderRadius: '10px', width: '394px', height: '52px', paddingLeft: '20px' }} />
                        </Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography fontSize='16px' fontWeight='600' lineHeight='25px' color='#00235C'>Kids : </Typography>
                            <InputBase sx={{ border: '1px solid #BCD6FF', borderRadius: '10px', width: '394px', height: '52px', paddingLeft: '20px' }} />
                        </Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography fontSize='16px' fontWeight='600' lineHeight='25px' color='#00235C'>Contact : </Typography>
                            <InputBase sx={{ border: '1px solid #BCD6FF', borderRadius: '10px', width: '394px', height: '52px', paddingLeft: '20px' }} />
                        </Box>
                        <Box display='flex' justifyContent='flex-end'>
                            <Button variant='contained' size='large' sx={{ fontSize: '20px', padding: '15px 45px', bgcolor: '#116CFF', color: '#fff', textTransform: 'none', fontWeight: '700', lineHeight: '24.2px', borderRadius: '10px', '&:hover': { bgcolor: '#00235C', color: '#fff' } }}>Register</Button>
                        </Box>
                    </Box>
                </Zoom>
                <Box style={{ position: 'absolute', right: '129px', marginTop: '277px' }}>
                    <Box border={2} borderColor='#FF463A' borderRadius='100%' display='flex' justifyContent='center' alignItems='center'>
                        <i class="fa-solid fa-headphones fa-bold" style={{ padding: '28px' }}></i>
                    </Box>
                </Box>
                <Box style={{ position: 'absolute', right: '106px', marginTop: '337px' }}>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Button sx={{ bgcolor: '#FF463A', color: '#fff', textTransform: 'none', padding: '4px 16px', borderRadius: '10px', border: 2, borderColor: '#FF463A', '&:hover': { border: 2, borderColor: 'red', color: '#fff', bgcolor: 'red' } }} >Ask Teacher</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default FormSection