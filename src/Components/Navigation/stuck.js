import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutscrn from '../screens/aboutscrn'

function Stuck() {
    return ( 
        <div> 
            <BrowserRouter> 
            <Routes>
                <Route path="*" Component={Aboutscrn} />
            </Routes>
            </BrowserRouter>
            
        </div>
        
    )
}

export default Stuck
