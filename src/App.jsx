import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './assets/Navbar';
import DashBoard from './assets/DashBoard';
import Patients from './assets/Patients';
import Success from './assets/Success';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Default route to the DashBoard */}
        <Route path="/" element={<Navigate to="/DashBoard" replace />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Patients" element={<Patients />} />
        <Route path="/Success" element={<Success />} />
        {/* Other components and routes can go here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
