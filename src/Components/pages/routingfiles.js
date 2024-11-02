import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from './bookingForm'; // Ensure this is the correct path
// import Home from './Home'; // Your main page component

function RoutingFiles() {
    return (
        
        <Router>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/booking" element={<BookingForm />} />
            </Routes>
        </Router>
    );
}

export default RoutingFiles;