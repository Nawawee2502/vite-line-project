// App.jsx
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile'; // นำเข้า Profile
import GoodsReceiptFromSupplier from './components/Warehouse/GoodsReceiptFromSupplier';
import CreateGoodsReceiptFromSuppler from './components/Warehouse/CreateGoodsReceiptFromSuppler';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/Warehousegoodsreceipt' element={<GoodsReceiptFromSupplier />} />
        <Route path='/createwarehousegoodsreceipt' element={<CreateGoodsReceiptFromSuppler />} />
      </Routes>
    </Router>
  );
}

export default App;
