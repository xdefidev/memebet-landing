import Head from 'next/head'
import { Box } from '@mui/material'
import BackgorundGradient from '@/common/components/atoms/BackgroundGradient'
import Appnav from '@/common/components/organism/Appnav'
import ContainerPage from '@/common/components/atoms/ContainerPage'
import HeroSite from '@/common/components/organism/HeroSite'
import Features from '@/common/components/organism/Features'
import TopCoins from '@/common/components/organism/TopCoins'
import Tokenomics from '@/common/components/Tokenomics'
import Steps from '@/common/components/organism/Steps'
import Academy from '@/common/components/organism/Acadamy'
import PartnerSupporters from '@/common/components/organism/PartnerSupporters'
import Footer from '@/common/components/organism/Footer'
import Description from '@/common/components/Description'
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>Memebets - Casino Platform</title>
      </Head>
      <Appnav />
      <Box className='relative'>
        <BackgorundGradient />
      </Box>
      <ContainerPage>
        <HeroSite />
        <Features />
        <TopCoins />
      </ContainerPage>
      <ContainerPage>
        <Image src="/gif1.gif" width={500} height={500} className="w-full py-4" alt="" loading="lazy" />
      </ContainerPage>
      <Box className='w-screen h-full xs:px-0 xs:py-8 lg:p-8 bg-[#1F2A45]'>
        <ContainerPage>
          <Steps />
        </ContainerPage>
      </Box>

      <ContainerPage className='w-screen h-full xs:px-0 xs:py-8 lg:p-8 '>
        <Tokenomics />
      </ContainerPage>

      <Box className='w-screen h-full xs:px-0 xs:py-8 lg:p-8 bg-[#1F2A45]'>
        <ContainerPage>
          <Description />
        </ContainerPage>
      </Box>
      <ContainerPage>
        <Image src="/gif2.gif" width={500} height={500} className="w-full py-4" alt="" loading="lazy" />
      </ContainerPage>

      <Box className='relative'>
        <ContainerPage>
          {/* <Academy /> */}
          <PartnerSupporters />
          <Footer />
        </ContainerPage>
      </Box>
    </>
  )
}
