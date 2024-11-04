

import React, { useState } from 'react' 
import "../CSS/TabSec.css"

function Tabs() { 
    const [activeTab,setactiveTab]=useState("attendence") 
     
    const tab=["Overview", "Attendees", "Invite", "Vendor shortlist", "Feedback forms"];

  return (
    <div className="tabs">{
        tab.map((tab)=>(
             <div className={`tab ${activeTab==tab ? "active":""}`} onClick={()=>setactiveTab(tab)}>{tab}

             </div>
        ))
    }  
        

    </div>
  )
}

export default Tabs;