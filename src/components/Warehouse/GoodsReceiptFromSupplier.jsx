import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import '../../App.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';



export default function GoodsReceiptFromSupplier() {
    const navigate = useNavigate();

    const actions = [
        { icon: <AddIcon />, name: 'Create', action: () => navigate('/createwarehousegoodsreceipt') },
    ];

    const cards = [
        {
            id: 1,
            refNo: '0001',
            date: '23/08/2567',
            supplier: 'Eleanor Pena',
            amount: '$66.00',
            username: 'Eleanor Pena'
        },
    ];

    return (
        <Box sx={{
            width: '100%',
            maxWidth: 'auto',
            margin: '0 auto',
            minHeight: '100vh',
            bgcolor: '#F5F5F5',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <Box
                sx={{
                    height: '205px',
                    width: '100%',
                    background: 'linear-gradient(180deg, #AD7A2C 0%, #EAB058 100%)',
                    borderBottomLeftRadius: '80px',
                    borderBottomRightRadius: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box sx={{ width: '85%' }}>
                    <Typography sx={{ fontSize: '22px', fontWeight: '600', mt: '34px', color: '#FFFFFF' }}>
                        Goods Receipt Supplier
                    </Typography>
                </Box>
                <Box sx={{ width: '85%' }}>
                    <TextField
                        size="small"
                        placeholder="Goods Receipt Search"
                        sx={{
                            bgcolor: '#FFFFFF',
                            mt: '8px',
                            width: '100%',
                            borderRadius: '24px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '24px',
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: '16px'
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <select
                        id="small-unit-select"
                        name="retail_unit_code"
                        style={{
                            width: '40%',
                            borderRadius: '15px',
                            padding: '8px',
                            marginTop: '8px',
                            border: '1px solid #ccc',
                            outline: 'none',
                            height: '40px',
                        }}
                    >
                        <option value="" disabled>Select Small Unit</option>
                        <option value="test">Supplier</option>
                    </select>
                    <IconButton sx={{ mt: '12px' }}>
                        <CalendarMonthIcon />
                    </IconButton>
                </Box>

                <Typography sx={{ fontSize: '20px', mt: '24px', color: '#5E5F5F' }}>
                    Goods Receipt Supplier
                </Typography>

                {cards.map((card) => (
                    <Box
                        key={card.id}
                        sx={{
                            width: '100%',
                            height: '116px',
                            bgcolor: '#FFFFFF',
                            borderLeft: '8px solid #AD7A2C',
                            boxShadow: '0px 4px 4px 0px #00000040',
                            borderTopLeftRadius: '5px',
                            borderTopRightRadius: '15px',
                            borderBottomLeftRadius: '5px',
                            borderBottomRightRadius: '15px',
                            mt: '12px',
                            p: '12px',
                            cursor: 'pointer',
                            '&:active': {
                                bgcolor: '#f5f5f5'
                            }
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography sx={{ fontSize: '14px' }}>
                                    Ref.no : <span>{card.refNo}</span>
                                </Typography>
                                <Typography sx={{ ml: 'auto', fontSize: '14px' }}>
                                    Date : <span>{card.date}</span>
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '6px' }}>
                                <Typography sx={{ fontSize: '14px' }}>Supplier</Typography>
                                <Typography sx={{ ml: 'auto', fontSize: '14px' }}>{card.supplier}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '6px' }}>
                                <Typography sx={{ fontSize: '14px' }}>Amount</Typography>
                                <Typography sx={{ ml: 'auto', fontSize: '14px' }}>{card.amount}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: '6px' }}>
                                <Typography sx={{ fontSize: '14px' }}>Username</Typography>
                                <Typography sx={{ ml: 'auto', fontSize: '14px' }}>{card.username}</Typography>
                            </Box>

                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                mt: '24px',
                            }}
                        >
                            <IconButton
                                sx={{
                                    bgcolor: '#E4E4E4',
                                    borderRadius: '5px',
                                    width: '50%',
                                    height: '100%',
                                    '&:hover': { bgcolor: '#d0d0d0' }
                                }}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                sx={{
                                    bgcolor: '#FAD7D9',
                                    borderRadius: '5px',
                                    width: '50%',
                                    height: '100%',
                                    '&:hover': { bgcolor: '#f8c4c7' }
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>

                ))}
            </Box>

            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{
                    position: 'fixed',
                    bottom: '16px',
                    right: '16px',
                    zIndex: 9999,
                    '& .MuiFab-primary': {
                        bgcolor: '#AD7A2C',
                        '&:hover': {
                            bgcolor: '#8B6226',
                        }
                    },
                }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={action.action} // เพิ่ม onClick
                        sx={{
                            bgcolor: '#AD7A2C',
                            color: 'white',
                            '&:hover': {
                                bgcolor: '#8B6226'
                            }
                        }}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}