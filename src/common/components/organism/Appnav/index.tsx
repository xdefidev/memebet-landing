import React, { useState } from 'react'
import { AppBar, Box, Button, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import Link from 'next/link';
import ContainerPage from '../../atoms/ContainerPage';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Cookies from 'js-cookie';
import ButtonContained from '../../atoms/ButtonContained';
import ButtonOutlined from '../../atoms/ButtonOutlined';
import { handleLogOut } from '@/common/utils/logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Changes on Scroll
function ChangesOnScroll(props: any) {
    const { children } = props

    const trigger = useScrollTrigger({
        disableHysteresis: true, //Whether or not there is a little delay when the user is scrolling.
        threshold: 100, //0 means trigger the event listener as soon as the user starts scrolling.
    });
    return React.cloneElement(children, {
        elevation: trigger ? 0 : 0  //0 means flat i.e. elevation of zero. 4 means elevation of 4 to show the floating state.
    });
}

type Anchor = 'left';

export default function Appnav() {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    })
    const [drawer, setDrawer] = React.useState({ left: false });
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setDrawer({ ...drawer, [anchor]: open })
            }
    const getUserInfo = Cookies.get('loginInfo')
    const router = useRouter()
    const [state, setState] = useState({
        value: '0x4cAED4056C99B9EFcD2C85ecd34Ad3F7b2d09544',
        copied: false,
    })

    function onCopyCall() {
        setState({ copied: true, value: '0x4cAED4056C99B9EFcD2C85ecd34Ad3F7b2d09544', });
        // () => setInterval(() => setState({ copied: false, value: '0x4cAED4056C99B9EFcD2C85ecd34Ad3F7b2d09544', }, 3000));
    }

    return (
        <ChangesOnScroll>

            <AppBar sx={{ backgroundColor: trigger ? "#0F172A" : 'transparent', boxShadow: trigger ? 2 : 0, borderBottomColor: '#363636', borderBottomWidth: '1px', }} className='transition-all duration-700 ease-in-out'>
                <Grid item xs={8} className='justify-center'><p className="flex justify-center bg-black text-white py-2 text-xs sm:text-sm"> Contract: &nbsp;
                    <CopyToClipboard text={state.value}
                        onCopy={onCopyCall}>
                        <button > {state.copied ? "copied!" : state.value}</button>
                    </CopyToClipboard></p></Grid>
                <Toolbar sx={{ height: trigger ? { xs: 75, md: 85, lg: 75 } : { xs: 65, md: 80, lg: 60 } }} className='transition-all duration-700 ease-in-out'>

                    <ContainerPage disableGutters>

                        <Grid container spacing={1} alignItems='center' className='relative' justifyContent='space-between'>
                            <Grid item xs={2} sx={{ display: { xs: 'flex', md: 'none' } }}>
                                {(['left'] as const).map((anchor) => (
                                    <React.Fragment key={anchor}>
                                        <Button variant='outlined' className='w-[10px]' onClick={toggleDrawer(anchor, true)} sx={{ color: 'primary' }}><MenuIcon /></Button>
                                        <Drawer anchor={anchor} open={drawer[anchor]} onClose={toggleDrawer(anchor, false)} PaperProps={{ sx: { backgroundColor: '#020617' } }} className='opacity-[0.98]'>
                                            <Box className='pt-4 backdrop-blur-2xl h-screen relative' sx={{ width: 240 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
                                                {/* <Typography variant='h6' sx={{display:'flex', justifyContent:'center', alignItems:'center', fontSize: 18}}>MemeBetsCoin</Typography> */}
                                                <Link href='/'>
                                                    <Stack direction='row' spacing={1} className='flex items-center text-lg' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Image src='/logo.jpeg' width={50} height={50} alt='MemeBetsCoin - Logo' style={{ borderRadius: "30px" }} />
                                                        <Typography variant='h5' className='font-bold uppercase'>MemeBets </Typography>
                                                    </Stack>
                                                </Link>
                                                <Divider className='pt-5 border-gray-600' />
                                                <List>
                                                    {MenuItems.map(item => {
                                                        return (
                                                            <>
                                                                <ListItem disablePadding>
                                                                    <Link href={item.link}>
                                                                        <ListItemButton className='w-[240px] justify-center py-4'>
                                                                            <Typography variant='body1'>{item.label}</Typography>
                                                                        </ListItemButton>
                                                                    </Link>
                                                                </ListItem>
                                                            </>
                                                        )
                                                    })}
                                                </List>
                                                <List className='absolute bottom-8'>
                                                    <ListItem className='w-[240px] justify-center py-4'>
                                                        {getUserInfo === undefined ?
                                                            <>
                                                                <Stack direction='row' spacing={1}>
                                                                    {/* <Link href='/register'>
                                                                        <ButtonContained label='Register' />
                                                                    </Link> */}
                                                                    <Link href='https://play.memebetscoin.com/'>
                                                                        <ButtonOutlined label='Dashboard' />
                                                                    </Link>
                                                                </Stack>
                                                            </>
                                                            :
                                                            <>
                                                                <Stack direction='column' spacing={2} alignItems='center' className='max-w-[200px] truncate'>
                                                                    <Link href='/register'>
                                                                        <ButtonContained label={getUserInfo} variant='text' size='large' className='align-middle max-w-[150px] truncate normal-case text-[16px] rounded-[2px] brightness-125' startIcon={<AccountCircleIcon fontSize='small' color='primary' />} />
                                                                    </Link>
                                                                    <Link href='/'>
                                                                        <ButtonOutlined label='Logout' onClick={handleLogOut} />
                                                                    </Link>
                                                                </Stack>
                                                            </>
                                                        }
                                                    </ListItem>
                                                </List>
                                            </Box>
                                        </Drawer>
                                    </React.Fragment>
                                ))}
                            </Grid>

                            <Grid item xs={8} className='justify-center'>

                                <Link href='/'>
                                    <Stack direction='row' spacing={1} className='flex items-center text-lg'>
                                        <Image src='/logo.jpeg' width={50} height={50} alt='MemeBetsCoin - Logo' style={{ borderRadius: "30px" }} />
                                        <Typography variant='h5' className='font-bold uppercase'>MemeBets </Typography>
                                    </Stack>
                                </Link>
                            </Grid>
                            <Grid item className='absolute flex right-0'>
                                <Stack spacing={{ md: 2, lg: 4 }} direction='row' sx={{ display: { xs: 'none', md: 'flex' } }} alignItems='center'>
                                    {MenuItems.map(item => {
                                        return (
                                            <>
                                                <Link href={item.link} className='text-light'>
                                                    <Typography variant='body1' className='hover:brightness-75 hover:text-underline underline-offset-8'>{item.label}</Typography>
                                                </Link>
                                            </>
                                        )
                                    })}
                                    {getUserInfo === undefined ?
                                        <Stack direction='row' spacing={{ md: 2, lg: 4 }}>
                                            {/* <ButtonContained label='Register' onClick={() => router.push('/register')} /> */}
                                            <ButtonOutlined label='Dashboard' onClick={() => router.push('https://play.memebetscoin.com/')} />
                                        </Stack>
                                        :
                                        <Stack direction='row' spacing={{ md: 2, lg: 4 }}>
                                            <ButtonContained label={getUserInfo} variant='text' startIcon={<AccountCircleIcon fontSize='small' color='primary' />} className='align-middle max-w-[150px] truncate normal-case text-[16px] rounded-[2px] brightness-125' />
                                            <ButtonOutlined label='Logout' onClick={handleLogOut} />
                                        </Stack>
                                    }
                                </Stack>
                            </Grid>
                        </Grid>
                    </ContainerPage>
                </Toolbar>
            </AppBar>
        </ChangesOnScroll >
    )
}

export const MenuItems = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'Get Started',
        link: '#get-started'
    },
    {
        label: 'Tokenomics',
        link: '#Tokenomics'
    },

    {
        label: 'Telegram',
        link: 'https://t.me/MemeBetsCoin'
    },
    {
        label: "Twitter",
        link: "https://x.com/MemeBetsCoin?t=byGhxOdV4ifNf9ir7iBlgg&s=09"
    }

]
