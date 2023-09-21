import { TabContext, TabPanel } from '@mui/lab'
import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import TabsContainerVer from '../../atoms/TabsContainerVer'
import TabItem from '../../atoms/TabItem'
import Image from 'next/image'

export default function Steps() {
    const [value, setValue] = React.useState('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }
    return (
        <Box component='section' className="my-20">
            <Box component='a' id='steps' className='relative xs:-top-[190px] lg:-top-[350px] '></Box>
            <Typography variant='h4' className='font-bold mb-6'>Get Started in 3 Steps</Typography>
            <Grid container spacing={0} rowSpacing={2}>
                <TabContext value={value}>
                    <Grid item xs={12} md={6}>
                        <TabsContainerVer onChange={handleChange} value={value} className='h-[315px]'>
                            <TabItem label='Connect wallet' value='1' />
                            <TabItem label='Deposit $MemeBetCoin Tokens' value='2' />
                            <TabItem label='Play and Earn!' value='3' />
                        </TabsContainerVer>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className='h-full bg-[#0F172A] rounded-none justify-center align-middle' >
                            <TabPanel value='1' className='p-0 xs:w-full xs:h-[200px] md:w-full md:h-[315px]'>
                                <Image src="/banner/1.png" width={400} height={500} className="w-full h-full" alt="" />
                            </TabPanel>
                            <TabPanel value='2' className='p-0 xs:w-full xs:h-[200px] md:w-full md:h-[315px]'>
                                <Image src="/banner/2.png" width={400} height={500} className="w-full h-full" alt="" />
                            </TabPanel>
                            <TabPanel value='3' className='p-0 xs:w-full xs:h-[200px] md:w-full md:h-[315px]'>
                                <Image src="/banner/3.png" width={400} height={500} className="w-full h-full" alt="" />
                            </TabPanel>
                        </Box>
                    </Grid>
                </TabContext>
            </Grid>
        </Box>
    )
}
