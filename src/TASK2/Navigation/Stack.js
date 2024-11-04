


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Overview from '../Screens/Overview';
import Attendeens from '../Screens/Attendeens';
import Vendors from '../Screens/Vendors';
import Feedback from '../Screens/Feedback';
import All from '../Screens/All';
import Accepted from '../Screens/Accepted';
import Awaiting from '../Screens/Awaiting';
import Decline from '../Screens/Decline';
import Question from '../Screens/Question';

function Stack() {
  return (
    <div>
         <Routes> 
            <Route path="/" element={<Overview/>} /> 
            <Route path="/attendeens" element={<Attendeens/>} /> 
            <Route path="/invite" element={<Vendors/>} /> 
            <Route path="/feedbackform" element={<Feedback/>} /> 


            <Route path="/all" element={<All/>} /> 
            <Route path="/accepted" element={<Accepted/>} /> 
            <Route path="/await" element={<Awaiting/>} /> 
            <Route path="/decline" element={<Decline/>} /> 
            <Route path="/questions" element={<Question/>} />

         </Routes>
    </div>
  )
}

export default Stack