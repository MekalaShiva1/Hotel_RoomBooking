import React from 'react'
import Footer from '../pages/Footer' ;
import "../screens/allScreenscss.css"
import BookingForm from '../pages/bookingForm';

function Contactscrn() {
    return (
      <> 
        <div> 
            <h2 className="text-center screens-headings  ">Contact Us</h2> 
            <BookingForm/>
            <Footer/>
        </div>
      
      </>
    )
}

export default Contactscrn
