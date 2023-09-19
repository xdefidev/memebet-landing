import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Features() {
  return (
    <Box component='section' marginBottom={10}>
      <Box component='a' id='features' className='relative xs:-top-[190px] lg:-top-[150px]'></Box>
      <Grid container rowSpacing={2} className='xs:-translate-y-20 lg:-translate-y-0'>
        <Grid item xs={12} md={3} marginBottom={{ xs: 4, md: 0 }}>
          <Typography variant='h4' className='font-bold text-4xl xs:text-center md:text-left'>
            10+
          </Typography>
          <Typography variant='h6' className='text-xl xs:text-center md:text-left'>
            Games listed
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} marginBottom={{ xs: 4, md: 0 }}>
          <Typography variant='h4' className='font-bold text-4xl xs:text-center md:text-left'>
            100%
          </Typography>
          <Typography variant='h6' className='text-xl xs:text-center md:text-left'>
            Decentralised
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} marginBottom={{ xs: 4, md: 0 }}>
          <Typography variant='h4' className='font-bold text-4xl xs:text-center md:text-left'>
            Bonus
          </Typography>
          <Typography variant='h6' className='text-xl xs:text-center md:text-left'>
            Deposit Bonus
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} marginBottom={{ xs: 4, md: 0 }}>
          <Typography variant='h4' className='font-bold text-4xl xs:text-center md:text-left'>
            24h/7days
          </Typography>
          <Typography variant='h6' className='text-xl xs:text-center md:text-left'>
            User Supports
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
