import React from 'react'
import Rooms from '../pages/rooms' 
import "../screens/allScreenscss.css"

function Roomscrn() {
    return (
      <> 
        <div className="rooms-room">  
            {/* <h1 className="text-center screens-headings " >Rooms Page</h1> */}
            <Rooms/>
        </div>
      </>
    )
}

export default Roomscrn
