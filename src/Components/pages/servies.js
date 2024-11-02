import React from 'react';
import '../css/servies.css'

export default function Services() {
    return (
        <> 
            <div className="services-heading"> 
                <h4>OUR ROOMS</h4> 
                <h1>Explore our <span className="sub-line">services</span></h1>
            </div> 

            <section className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Our Features</h4>
                            <p className="text-muted para-desc mx-auto mb-0">
                                There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="card service-wrapper rounded border-0 shadow p-4">
                            <div className="icon text-center text-custom h1 shadow rounded bg-white">
                            
                            </div>
                            <div className="content mt-4">
                                <h5 className="title">Fully Responsive</h5>
                                <p className="text-muted mt-3 mb-0">
                                    It is a long established fact that a reader will be distracted by the when looking at its layout.
                                </p>
                                <div className="mt-3">
                                    <a href="#" className="text-custom">Read More <i className="mdi mdi-chevron-right"></i></a>
                                </div>
                            </div>
                            <div className="big-icon h1 text-custom">
                             
                            </div>
                        </div>
                    </div>

                  
                </div>
            </section>
        </>
    );
}
