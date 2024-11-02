import React from 'react'; 
import { Link } from 'react-router-dom' 
import '../css/rooms.css'

export default function Rooms() {
    const Linkstyle={ 
        textDecoration: "none", 
        // color:"red" ,
        fontSize:"30px" ,
       
   
      } ; 
    return (
        <>   
            <div> 
                <div className="heading"> 
                    <h4>OUR ROOMS</h4> 
                    <h1>Explore our <span className="rooms"> Rooms</span></h1>

                </div>
                <div className="card-group" style={{  columnGap: '20px' }}> 

                    <div className="card" style={{  gap: '10px' }} >
                        <img src="/assets/imgs/room-1.jpg" className="card-img-top" alt="..." /> 
                        <div className="card-body">
                            <h5 className="card-title">Super Deluxe</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </p>  
                            {/* <div className="aboutroom"> 
                                <p>    This is a wider card with  supporting text below as a natural lead-in to
                                additional content This content is a little bit longer </p>

                            </div> */}
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button type="button" className="btn btn-warning">VIEW DETAILS</button>
                                <button type="button" className="btn btn-primary"  >BOOK NOW</button> 
                            </div> 
                            <p className="card-text">
                                <small className="text-muted">Last checkout 1 day ago</small>
                            </p>
                        </div> 


                    </div>
                    <div className="card" style={{  gap: '10px' }}>
                        <img src="/assets/imgs/room-2.jpg" className="card-img-top" alt="image_pic" />
                        <div className="card-body">
                            <h5 className="card-title">Executive Suite</h5>
                            <p className="card-text">
                                This card has supporting text below as a natural lead-in to additional
                                content.
                            </p>  

                            {/* <div className="aboutroom"> 
                                <p>    This is a wider card with  supporting text below as a natural lead-in to
                                additional content This content is a little bit longer </p>

                            </div>  */}

                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button type="button" className="btn btn-warning">VIEW DETAILS</button>
                                <button type="button" className="btn btn-primary">BOOK NOW</button>
                            </div> 
                            <p className="card-text">
                                <small className="text-muted">Last checkout 6 hours ago</small>
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{  gap: '10px' }}>
                        <img src="/assets/imgs/room-3.jpg" className="card-img-top" alt="image_pic" />
                        <div className="card-body">
                            <h5 className="card-title">Junior Suit</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button type="button" className="btn btn-warning">VIEW DETAILS</button>
                                <button type="button" className="btn btn-primary">BOOK NOW</button>
                            </div> 
                            <p className="card-text">
                                <small className="text-muted">last checkout 6 hours ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}
