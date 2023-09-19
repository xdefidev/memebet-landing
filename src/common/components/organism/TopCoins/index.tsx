import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import CoinItem from '../../molecules/CoinItem'
import { TCoinItemProps } from '@/common/types/coin'
import CoinItemSkeleton from '../../molecules/CoinItemSkeleton'

export default function TopCoins() {
  const [cryptoData, setCryptoData] = React.useState<TCoinItemProps[]>([])
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/coins');
      const data = await response.json()
      setCryptoData(data)
    }
    fetchData()
    const interval = setInterval(() => {
      fetchData();
    }, 60000);
    return () => clearInterval(interval)
  }, [])

  const Games = [{ name: "Crash", image: "/crash.png" }, { name: "Classic Dice", image: "/classicdice.png" }, { name: "Wheel", image: "/wheel.png" }, { name: "Blackjack", image: "/blackjack.png" },]
  return (
    <Box component='section' marginBottom={20} marginTop={10}>
      <Box component='a' id='top-coins' className='relative -top-[120px]'></Box>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h4' className='font-bold'>Top Games</Typography>
        <Link href='/'>
          <Typography variant='body1' className='text-lg font-bold hover:text-primary transition'>See Games →</Typography>
        </Link>
      </Stack>
      <Grid container spacing={1}>
        {
          // eslint-disable-next-line react/jsx-key
          Games.map((item) => <Grid item xs={12} md={3} marginTop={2} ><Image src={item.image} width={500} height={500} alt={''} className="rounded" /></Grid>)
        }
        {/* { cryptoData.length === 0 ? 
            Array.from({ length: 4 }).map((_, i) => (
              <Grid item xs={12} md={3} marginTop={2} key={i}>
                  <CoinItemSkeleton />
              </Grid>
            ))
          :
            cryptoData.map(data => {
              return(
                <>
                  <Grid item xs={12} md={3} marginTop={2}>
                        <CoinItem name={data.name} chips={data.chips} value={data.value} precentage={data.precentage} />
                  </Grid>
                </>
              )
            })
        } */}
      </Grid>
    </Box>
  )
}
