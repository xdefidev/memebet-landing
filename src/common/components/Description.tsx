import { Box, Grid, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import Modal from '@mui/material/Modal'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: "auto"
};


export default function Description() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <Box component='section' marginBottom={-3} mx={4} >
            <div className="inline-block align-middle">
                <Typography variant='h4' className='font-bold'>Crypto Online Casino</Typography>
                <Box className="mt-4">
                    <div className="my-4">
                        <Typography variant="p" className="font-normal" >
                            Meme Bets ($MBETS) is the future of online gambling, where the thrill of casino games meets the excitement of cryptocurrency. As the flagship token of our cutting-edge crypto online casino, $MBETS allows you to embark on a thrilling journey through a world of bets and memes....
                        </Typography>

                        <Button onClick={handleOpen}>See More</Button>

                        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">

                            <Box sx={style}>

                                <Typography className='font-bold mb-4' id="modal-modal-title" variant="h6" component="h2">Crypto Online Casino</Typography>

                                <Typography variant="p" className="font-normal" > Meme Bets ($MBETS) is the future of online gambling, where the thrill of casino games meets the excitement of cryptocurrency. As the flagship token of our cutting-edge crypto online casino, $MBETS allows you to embark on a thrilling journey through a world of bets and memes.
                                </Typography>
                                <br></br>
                                <br></br>
                                <Typography variant="p" className="font-normal" >

                                    With Meme Bets, you can experience the ultimate fusion of entertainment and financial opportunity. Our platform provides a seamless and secure environment for betting with $MBETS and other popular cryptocurrencies, giving you the freedom to choose how you want to play. Whether you're a crypto enthusiast or a seasoned gambler, our casino offers an array of games that cater to every taste and skill level.
                                </Typography>
                                <br></br>
                                <br></br>
                                <Typography variant="p" className="font-normal" >
                                    As a token holder, you become part of our vibrant community of meme-loving gamblers, where you can share your experiences and strategies while betting on your favorite games. Plus, our unique meme-themed approach adds an extra layer of fun and excitement to every gaming session.
                                </Typography>
                                <br></br>
                                <br></br>
                                <Typography variant="p" className="font-normal" >
                                    At Meme Bets, we prioritize fairness and transparency, employing the latest blockchain technology to ensure that every bet is provably fair. Your privacy and security are of utmost importance to us, and we've taken every measure to safeguard your assets and personal information.
                                </Typography>
                                <br></br>
                                <br></br>
                                <Typography variant="p" className="font-normal" >
                                    Join us in the world of Meme Bets and let your crypto journey take a hilarious and profitable turn. With $MBETS, you're not just betting; you're betting with memes. It's time to place your bets, have a laugh, and let the memes roll!
                                </Typography>
                            </Box>

                        </Modal>


                    </div>

                </Box>
            </div>

        </Box>
    )
}