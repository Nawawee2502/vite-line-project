import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuWarehouse from './Warehouse/Menu';
import MenuBranch from './Branch/Menu';
import MenuKitchen from './CommissaryKitchen/Menu';
import Dashboard from './Dashboard';


function Home() {
    const [value, setValue] = React.useState(0);

    // ฟังก์ชันสำหรับเลือก content ที่จะแสดงตาม value
    const renderContent = () => {
        switch (value) {
            case 0:
                return <div><Dashboard /></div>;
            case 1:
                return <div> <MenuBranch /> </div>;
            case 2:
                return <div><MenuWarehouse /></div>;
            case 3:
                return <div><MenuKitchen /></div>;
            case 4:
                return <div>Profile Content</div>;
            default:
                return <div>Home Content</div>;
        }
    };

    return (
        <div>
            <Box sx={{ pb: 7 }}>
                <CssBaseline />

                {/* Render Content ตาม value ที่เลือก */}
                <Box sx={{}}>
                    {renderContent()}
                </Box>

                {/* BottomNavigation ที่ใช้ควบคุม value */}
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                        <BottomNavigationAction label="Branch" icon={<StorefrontIcon />} />
                        <BottomNavigationAction label="Warehouse" icon={<WarehouseIcon />} />
                        <BottomNavigationAction label="Kitchen" icon={<LocalDiningIcon />} />
                        <BottomNavigationAction label="Profile" icon={<PersonOutlineIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </div>
    );
}

export default Home;
