import { useState } from 'react';
import { Box, TextField, Typography, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import SearchIcon from '@mui/icons-material/Search';
import CropFreeIcon from '@mui/icons-material/CropFree';

export default function CreateGoodsReceiptForm() {
    const navigate = useNavigate();

    const [items, setItems] = useState([
        { id: '0001', name: 'Brown rice', unit: 'Bag of', unitPrice: 66.00, amount: 2, total: 132.00 },
    ]);

    const subtotal = '$396.00';
    const tax = '$11.50';
    const total = '$93.46';

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Header */}


            {/* Form Content */}
            <Box sx={{ width: '90%', padding: '36px 12px' }} >
                <Box >
                    {/* Basic Info */}
                    <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#754C27' }}>
                        Ref no
                    </Typography>
                    <TextField
                        size="small"
                        placeholder="Ref no"
                        disabled

                        sx={{
                            mt: '8px',
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                height: '50px'
                            },
                        }}
                    />
                    <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#754C27' }}>
                        Date
                    </Typography>
                    <TextField
                        fullWidth
                        type="date"
                        variant="outlined"
                        className="bg-white"
                        sx={{
                            mt: '8px',
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                height: '50px'
                            },
                        }}
                    />
                    <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#754C27' }}>
                        Supplier
                    </Typography>
                    <TextField
                        fullWidth
                        select
                        variant="outlined"
                        className="bg-white"
                        SelectProps={{ native: true }}
                        sx={{
                            mt: '8px',
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                height: '50px'
                            },
                        }}
                    >
                        <option value="">Select Supplier</option>
                        <option value="supplier1">Supplier 1</option>
                    </TextField>
                    <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#754C27' }}>
                        Username
                    </Typography>
                    <TextField
                        size="small"
                        placeholder="Username"
                        disabled
                        sx={{
                            mt: '8px',
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                height: '50px'
                            },
                        }}
                    />
                    <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#754C27' }}>
                        Recorded date and time
                    </Typography>
                    <TextField
                        size="small"
                        placeholder="Username"
                        disabled
                        sx={{
                            mt: '8px',
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                height: '50px'
                            },
                        }}
                    />
                </Box>

                <Box sx={{ width: '100%', mt: 3 }}>
                    {/* Header Section */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2
                    }}>
                        <Typography sx={{
                            fontSize: '18px',
                            fontWeight: '600',
                            color: '#754C27'
                        }}>
                            Current Order
                        </Typography>
                        <Button
                            sx={{
                                color: '#754C27',
                                bgcolor: '#F0F0F0',
                                fontSize: '14px',
                                '&:hover': {
                                    bgcolor: '#E0E0E0'
                                }
                            }}
                        >
                            Clear All
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',

                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#F5F5F5',
                            borderRadius: '25px',
                            p: '8px 16px',
                            width: '80%'
                        }}>
                            <SearchIcon sx={{ color: '#754C27', mr: 1 }} />
                            <TextField
                                placeholder="Search"
                                variant="standard"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                }}
                                sx={{
                                    '& input': {
                                        color: '#754C27',
                                    }
                                }}
                            />
                        </Box>
                        <IconButton>
                            <CropFreeIcon sx={{ color: '#754C27', ml: 'auto', mr: 'auto', fontSize:'36px' }} />
                        </IconButton>
                    </Box>


                    {/* Items List */}
                    {items.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                bgcolor: '#FFFFFF',
                                borderRadius: '16px',
                                p: 2,
                                mb: 2,
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
                            }}
                        >
                            {/* Item Header */}
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Box sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    bgcolor: '#AD7A2C',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2
                                }}>
                                    <Typography sx={{ color: '#FFFFFF' }}>
                                        {item.name[0].toUpperCase()}
                                    </Typography>
                                </Box>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography sx={{ fontWeight: 600, color: '#754C27' }}>
                                        {item.name}
                                    </Typography>
                                    <Typography sx={{ color: '#999999', fontSize: '14px' }}>
                                        {item.id}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <IconButton size="small">
                                        <DeleteIcon sx={{ color: '#999999' }} />
                                    </IconButton>
                                </Box>
                            </Box>

                            {/* Item Details */}
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex' }}>
                                    <Typography sx={{ color: '#999999', fontSize: '14px', mb: 0.5 }}>
                                        Unit
                                    </Typography>
                                    <Typography sx={{ color: 'black', ml: 'auto' }}>
                                        {item.unit}
                                    </Typography>
                                    {/* <Typography sx={{ color: '#999999', fontSize: '14px', mb: 0.5 }}>
                                        Unit Price
                                    </Typography> */}
                                </Box>
                                <Box sx={{ display: 'flex', mt: '8px' }}>
                                    <Typography sx={{ color: '#999999', fontSize: '14px', mb: 0.5 }}>
                                        Unit Price
                                    </Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        ml: 'auto',
                                    }}>
                                        <IconButton
                                            size="small"
                                            sx={{
                                                bgcolor: '#F5F5F5',
                                                '&:hover': { bgcolor: '#E0E0E0' }
                                            }}
                                        >
                                            <RemoveIcon sx={{ fontSize: '16px' }} />
                                        </IconButton>
                                        <Typography sx={{ color: '#754C27' }}>
                                            ${item.unitPrice.toFixed(2)}
                                        </Typography>
                                        <IconButton
                                            size="small"
                                            sx={{
                                                bgcolor: '#F5F5F5',
                                                '&:hover': { bgcolor: '#E0E0E0' }
                                            }}
                                        >
                                            <AddIcon sx={{ fontSize: '16px' }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', mt: '8px' }}>
                                    <Typography sx={{ color: '#999999', fontSize: '14px', mb: 0.5 }}>
                                        Amount
                                    </Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        ml: 'auto'
                                    }}>
                                        <IconButton
                                            size="small"
                                            sx={{
                                                bgcolor: '#F5F5F5',
                                                '&:hover': { bgcolor: '#E0E0E0' }
                                            }}
                                        >
                                            <RemoveIcon sx={{ fontSize: '16px' }} />
                                        </IconButton>
                                        <Typography sx={{ color: '#754C27' }}>
                                            {item.amount}
                                        </Typography>
                                        <IconButton
                                            size="small"
                                            sx={{
                                                bgcolor: '#F5F5F5',
                                                '&:hover': { bgcolor: '#E0E0E0' }
                                            }}
                                        >
                                            <AddIcon sx={{ fontSize: '16px' }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', mt: '8px' }}>
                                    <Typography sx={{ color: '#754C27', fontWeight: 600 }}>
                                        Total
                                    </Typography>
                                    <Typography sx={{ color: '#754C27', fontWeight: 600, ml: 'auto' }}>
                                        ${item.total.toFixed(2)}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>



            </Box>
            <Box
                sx={{
                    bgcolor: '#EAB86C',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: '24px 48px',
                    borderTopLeftRadius: '50px',
                    borderTopRightRadius: '50px'
                }}
            >
                <Box >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '24px' }}>
                        <Typography>Subtotal</Typography>
                        <Typography>{subtotal}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '16px' }}>
                        <Typography>Tax(12%)</Typography>
                        <Typography>{tax}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '16px' }}>
                        <Typography>Total</Typography>
                        <Typography>{total}</Typography>
                    </Box>
                </Box>
                <Button
                    variant="contained"
                    fullWidth
                    className="mt-6"
                    sx={{
                        bgcolor: '#FFFFFF',
                        '&:hover': { bgcolor: '#FFFFFF' },
                        mt: '16px',
                        color: '#77521A',
                        borderRadius: '30px'
                    }}
                >
                    Save
                </Button>
            </Box>
        </Box>

    );
}