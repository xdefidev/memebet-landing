import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import Image from "next/image"
// import CoinItem from '../../molecules/CoinItem'
import { TCoinItemProps } from '@/common/types/coin'
// import CoinItemSkeleton from '../../molecules/CoinItemSkeleton'

export default function Tokenomics() {
    return (
        <Box component='section' marginBottom={-3} mx={4} >
            <div className="inline-block align-middle">
                <Typography variant='h4' className='font-bold'>MemeBets Tokenomics</Typography>
                <Box className="mt-4">
                    <div className="my-4">
                        <Typography variant='h5' className='font-semibold'>Total Supply</Typography>
                        <Typography variant='h6' className='font-normal text-[#CACAFF]'>420,690,000,000,000
                        </Typography>

                    </div>
                    <div className="my-4">
                        <Typography variant='h5' className='font-semibold'>Buy Tax</Typography>
                        <Typography variant='h6' className='font-normal text-[#CACAFF]'>5%
                        </Typography>

                    </div>
                    <div className="my-4">
                        <Typography variant='h5' className='font-semibold'>Sell Tax</Typography>
                        <Typography variant='h6' className='font-normal text-[#CACAFF]'>5%
                        </Typography>

                    </div>

                </Box>
            </div>

        </Box>
    )
}