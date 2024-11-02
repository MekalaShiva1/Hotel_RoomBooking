import React from 'react'
import Carousel from '../pages/carousel'
import Aboutus from '../pages/aboutus'
import Rooms from '../pages/rooms'
import Tesitmonial from '../pages/tesitmonial'
import Footer from '../pages/Footer'
import Stuck from '../Navigation/stuck'

function HomePage() {
    return ( 
        <div>
            <Carousel/> 
            <Aboutus/> 
            <Rooms/> 
            <Tesitmonial/> 
            <Footer/>
        </div>
        
    )
}

export default HomePage
