// import React from 'react'
import { AppBar, Typography, Box } from '@mui/material'


export default function Dashboard() {
    return (
        <div>
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
                    Dashboard
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
                
            </Box>
        </div>
    )
}
