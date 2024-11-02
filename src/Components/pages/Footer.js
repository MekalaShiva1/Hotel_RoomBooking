
import React from 'react' ;
import '../css/footer.css';

function Footer() {
    return ( 
        <> 
        <div>
        <>
  
  <div className="container footer-box my-7 w-800">
  
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >
     
      <section>
      
        <div>
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github" />
          </a>
        </div>
   
      </section>
   
      <section className="">
        <div className="container text-center text-md-start mt-5">
          
          <div className="row mt-3">
         
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
              <h6 className="text-uppercase text-warning fw-bold">HOTELIER</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
         
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
              <h6 className="text-uppercase text-warning fw-bold">Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-white">
                  services
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  gym
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  games
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  mens
                </a>
              </p>
            </div>
          
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase text-warning  heading fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-white">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Help
                </a>
              </p>
            </div>
           
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
              <h6 className="text-uppercase text-warning fw-bold">Contact</h6>
              <hr
                className="mb-4 heading mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <i className="fas fa-home mr-3" /> Banglore, NY 10012, 
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> info@example.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3" /> + 01 234 567 89
              </p>
            </div>
           
          </div>
        
        </div>
      </section>
      
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          HOTELIER.com
        </a>
      </div>
     
    </footer>

  </div>
 
</>

        </div>
        </>
        
    )
}

export default Footer
