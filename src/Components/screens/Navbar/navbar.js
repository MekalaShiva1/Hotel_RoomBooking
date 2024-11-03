import React from 'react';
// import '../css/Navbar.css';
import { Link } from 'react-router-dom';

 export default function Navbar() {
    return ( 
        <> 
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    {/* <a className="navbar-brand text-warning "  href="#">
      HOTELIER
    </a> */} 
      <Link to={"/"} className="navbar-brand text-warning "  >HOTELIER</Link>

    {/* <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">
            Home
          // </a> */}  


           <Link to={"/about"} className="nav-link active" > ABOUT </Link>
        </li> 
            
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">
            services
          </a> */}
        </li> 

        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">
            booking
          </a> */} 
          <Link to={"/rooms"} className="nav-link active" >ROOMS</Link>
        </li> 
       
              

        
        <li className="nav-item dropdown">
          {/* <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </a> */} 
          <Link to={"/contact"}  className="nav-link active" > CONTACT</Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              {/* <a className="dropdown-item" href="#">
                Action
              </a> */}
            </li>
          
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              {/* <a className="dropdown-item" href="#">
                Something else here
              </a> */}
            </li>
          </ul>
        </li>  

        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">
            Contact
          </a> */}
        </li>

       
      </ul>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

        
        </>
        
    )
}

