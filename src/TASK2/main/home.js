import React from 'react'
import Tabs from '../Data/Tabs';
import Header from '../Data/Header';
import EventDetails from '../Data/Saledetails';
import AttendeesTable from '../Data/AttendSec';

export default  function Home() {
  return (
    <div>  
      <Header/>
        <Tabs/> 
        <EventDetails/>  
        <AttendeesTable/>
        

    </div>
  );
}

