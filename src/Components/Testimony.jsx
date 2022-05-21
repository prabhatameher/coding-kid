import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LeftChart from './LeftChart'
import Child1 from '../images/child1.png'
import Child2 from '../images/child2.png'
import Child3 from '../images/child3.png'
import Child4 from '../images/child4.png'
import RightChart from './RightChart'
import { Zoom, Slide } from 'react-reveal';



const Testimony = () => {
    return (
        <>
            <Box height='697px' display='flex' flexDirection='column' bgcolor='#FFB400' >
                <Typography fontSize='36px' fontWeight='700' lineHeight='50px' color='#fff' style={{ marginLeft: '100px', marginTop: '60px' }}>Testimony</Typography>
                <Box width='100%' display='flex' justifyContent='center' height='60%' flexWrap='wrap' style={{ marginTop: '52px' }} >
                    <LeftChart name='Eleanor Pena' age='10' url={Child1} />
                    <Zoom >
                        <RightChart name='Cameron Alexander' age='8' url={Child3} />
                        <LeftChart name='Jane Cooper' age='9' url={Child2} />
                    </Zoom>
                    <RightChart name='Jenny Wilson' age='12' url={Child4} />
                </Box>
                <Box display='flex' justifyContent='flex-end' marginTop='52px' marginRight='100px'>
                    <Typography fontSize='21px' fontWeight='400' lineHeight='25.41px' color='#fff' letterSpacing='1.5%' style={{ textDecoration: 'underline' }}>All Reviews (99+)</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Testimony