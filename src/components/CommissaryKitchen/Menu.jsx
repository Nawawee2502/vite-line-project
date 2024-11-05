import { AppBar, Box, Button, Typography } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
// import React from 'react'

export default function MenuKitchen() {
    return (
        <>
            <AppBar
                sx={{
                    height: '68px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: '#FFFFFF'
                }}
            >
                <Typography sx={{ fontSize: '24px', fontWeight: '700', color: '#000000' }}>
                    Branch
                </Typography>
            </AppBar>
            <Box
                sx={{
                    bgcolor: '#EDEDED',
                    height: '94vh',
                    width: '100%',
                    p: '84px 24px'
                }}
            >
                <Typography sx={{ color: '#324646', fontSize: '20px' }}>
                    Menu
                </Typography>
                <Button
                    sx={{
                        height: '79px',
                        width: '100%',
                        bgcolor: '#FFFFFF',
                        borderRadius: '20px',
                        p: '0px 18px',
                        mt: '12px'
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <Box
                            sx={{
                                bgcolor: '#EAB86C',
                                height: '50px',
                                width: '50px',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <ArticleIcon sx={{ color: '#FFFFFF', height: '30px', width: '25px' }} />

                        </Box>
                        <Typography sx={{ fontSize: '18px', ml: '24px', color: '#242736' }}>
                            Purchase order Warehouse
                        </Typography>
                    </Box>
                </Button>
                <Button
                    sx={{
                        height: '79px',
                        width: '100%',
                        bgcolor: '#FFFFFF',
                        borderRadius: '20px',
                        p: '0px 18px',
                        mt: '12px'
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <Box
                            sx={{
                                bgcolor: '#EAB86C',
                                height: '50px',
                                width: '50px',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <ArticleIcon sx={{ color: '#FFFFFF', height: '30px', width: '25px' }} />

                        </Box>
                        <Typography sx={{ fontSize: '18px', ml: '24px', color: '#242736' }}>
                            Goods Receipt Warehouse
                        </Typography>
                    </Box>
                </Button>
                <Button
                    sx={{
                        height: '79px',
                        width: '100%',
                        bgcolor: '#FFFFFF',
                        borderRadius: '20px',
                        p: '0px 18px',
                        mt: '12px'
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <Box
                            sx={{
                                bgcolor: '#EAB86C',
                                height: '50px',
                                width: '50px',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <ArticleIcon sx={{ color: '#FFFFFF', height: '30px', width: '25px' }} />

                        </Box>
                        <Typography sx={{ fontSize: '18px', ml: '24px', color: '#242736' }}>
                            Bill of Lading
                        </Typography>
                    </Box>
                </Button>
                <Button
                    sx={{
                        height: '79px',
                        width: '100%',
                        bgcolor: '#FFFFFF',
                        borderRadius: '20px',
                        p: '0px 18px',
                        mt: '12px'
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <Box
                            sx={{
                                bgcolor: '#EAB86C',
                                height: '50px',
                                width: '50px',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <ArticleIcon sx={{ color: '#FFFFFF', height: '30px', width: '25px' }} />

                        </Box>
                        <Typography sx={{ fontSize: '18px', ml: '24px', color: '#242736' }}>
                            Goods Receipt Production
                        </Typography>
                    </Box>
                </Button>
                <Button
                    sx={{
                        height: '79px',
                        width: '100%',
                        bgcolor: '#FFFFFF',
                        borderRadius: '20px',
                        p: '0px 18px',
                        mt: '12px'
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <Box
                            sx={{
                                bgcolor: '#EAB86C',
                                height: '50px',
                                width: '50px',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <ArticleIcon sx={{ color: '#FFFFFF', height: '30px', width: '25px' }} />

                        </Box>
                        <Typography sx={{ fontSize: '18px', ml: '24px', color: '#242736' }}>
                            Warehouse Transfer Order
                        </Typography>
                    </Box>
                </Button>
                <Button
                    sx={{
                        height: '79px',
                        width: '100%',
                        bgcolor: '#FFFFFF',
                        borderRadius: '20px',
                        p: '0px 18px',
                        mt: '12px'
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <Box
                            sx={{
                                bgcolor: '#EAB86C',
                                height: '50px',
                                width: '50px',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <ArticleIcon sx={{ color: '#FFFFFF', height: '30px', width: '25px' }} />

                        </Box>
                        <Typography sx={{ fontSize: '18px', ml: '24px', color: '#242736' }}>
                            Invoice to Branch
                        </Typography>
                    </Box>
                </Button>
                <Button
                    sx={{
                        height: '79px',
                        width: '100%',
                        bgcolor: '#FFFFFF',
                        borderRadius: '20px',
                        p: '0px 18px',
                        mt: '12px'
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                        <Box
                            sx={{
                                bgcolor: '#EAB86C',
                                height: '50px',
                                width: '50px',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <ArticleIcon sx={{ color: '#FFFFFF', height: '30px', width: '25px' }} />

                        </Box>
                        <Typography sx={{ fontSize: '18px', ml: '24px', color: '#242736' }}>
                            Inventory Update
                        </Typography>
                    </Box>
                </Button>
            </Box>
        </>
    )
}