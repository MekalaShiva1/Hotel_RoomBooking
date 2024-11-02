

import React from 'react'; 
import '../css/aboutus.css'

function Aboutus() {
    return (
        <div className="container about-cont my-5">
           
            <div className="text-center mb-5">
                <h5 className="text-warning fw-bold">ABOUT US</h5>
                <h1>
                    Welcome to <span className="text-warning">HOTELIER</span>
                </h1>
                <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                    Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                </p>
            </div>

          
            <div className="row text-center mb-5">
                <div className="col-md-4">
                    <div className="display-4 text-warning">🏨</div>
                    <h2>{7861}</h2>
                    <p>Rooms</p>
                </div>
                <div className="col-md-4">
                    <div className="display-4 text-warning">👥</div>
                    <h2>{1234}</h2>
                    <p>Staffs</p>
                </div>
                <div className="col-md-4">
                    <div className="display-4 text-warning">⚙️</div>
                    <h2>4321</h2>
                    <p>Clients</p>
                </div>
            </div>

          
            <div className="text-center mb-5">
                <button className="btn btn-warning btn-lg text-white">EXPLORE MORE</button>
            </div>

          
            <div className="row g-3">
                <div className="col-md-6">
                    <img src="/assets/imgs/video.jpg" alt="Pool" className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <img src="/assets/imgs/about-2.jpg" alt="Beach view" className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <img src="/assets/imgs/about-3.jpg" alt="Resort" className="img-fluid rounded" style={{width: '100%',height: '73%'}}/>
                </div>
                <div className="col-md-6">
                    <img src="/assets/imgs/about-4.jpg" alt="Relaxation" className="img-fluid rounded" />
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
