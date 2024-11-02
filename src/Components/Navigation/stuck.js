import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Aboutscrn from '../screens/aboutscrn' ;
import Contactscrn from '../screens/contactscrn';
import Roomscrn from '../screens/roomscrn';
import CarouselPage from '../screens/CarouselPage';
import InvalidScreen from '../screens/InvalidScreen';
import HomePage from '../Home/HomePage';




function Stuck() {
    return ( 
        <div> 
            {/* <BrowserRouter>  */}
            <Routes>  
               
                   
                
                <Route path="/" element={<HomePage/>} /> 
               
                <Route path="/about" element={<Aboutscrn/>} /> 
                <Route path="/contact" element={<Contactscrn/>} /> 
                <Route path="/rooms" element={<Roomscrn/>}/> 
                <Route path="*" element={<InvalidScreen/>} />
                
            </Routes>
            {/* </BrowserRouter> */}
            
        </div>
        
    )
}

export default Stuck
