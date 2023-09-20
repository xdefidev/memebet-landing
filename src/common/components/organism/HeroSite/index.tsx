import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Cookies from 'js-cookie'

export default function HeroSite() {
    const getUserInfo = Cookies.get('loginInfo')
    return (
        <Box component='section' id='hero'>
            <Grid container spacing={1} marginTop={10}>
                <Grid item xs={12} md={6}>
                    <Box className='xs:h-screen md:h-[calc(100vh/2)] lg:h-[calc(100vh-300px)] content-center grid xs:-translate-y-20 lg:translate-y-0'>
                        <Typography variant='h2' className='font-bold text-4xl mb-2'>
                            Bets and Memes
                        </Typography>
                        <Typography variant='h3' className='text-[1.4rem] mb-4'>
                            Bet with $MBETS and other popular cryptocurrencies. Play Crash, Classic Dice, Blackjack, Roulette, and more classic casino games right in your browser.
                        </Typography>
                        <Stack direction='column' spacing={1} alignItems='left'>
                            {getUserInfo === undefined ?
                                <Link href='https://play.memebetscoin.com/'>
                                    <Button variant='contained' size='large' className='font-bold text-[16px] rounded-[5px] py-3'>Sign Up Now →</Button>
                                </Link>
                                :
                                <Link href='https://play.memebetscoin.com/'>
                                    <Button variant='contained' size='large' className='font-bold text-[16px] rounded-[5px] py-3'>Sign Up Now →</Button>
                                </Link>
                            }
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <Image src="/eth.png" width={30} height={30} />
                            {/* <Link href='#'>
                                <Image src='/appstore.png' width={35} height={35} alt='Get on Apple Store' className='hover:brightness-75 transition' />
                            </Link>
                            <Link href='#'>
                                <Image src='/playstore.png' width={35} height={35} alt='Get on Google Playstore' className='translate-y-1 hover:brightness-75 transition' />
                            </Link> */}
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} className='grid'>
                    <Box className='xs:w-3/4 lg:w-[55%] xl:w-[73%] justify-self-center md:mt-[4rem] lg:mt-[8rem]' display={{ xs: 'none', md: 'block' }}>
                        <Image src='/Hero.png' width={100} height={100} alt='Memebets Hero' layout='responsive' className='xs:-translate-y-6 lg:-translate-y-[3.6rem]' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
