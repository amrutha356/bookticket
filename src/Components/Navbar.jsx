import React from "react";



const Navbar = () => {
    return ( 
        
        <nav className="navbar navbar-expand-lg nav-1 navbar-dark bg-dark ">
      
        <div className="container-fluid px-5 "/>
          <a className="navbar-brand" href="#"><img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt=""/></a>
          <button classNames="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent"/>
            <form className="d-flex " role="search">
              <input className="form-control nav-form me-2" type="search" placeholder="search for movies, events, series" aria-label="Search"/>
              
            </form>

            <div className="d-flex right align-items-center ">
                 <ul>
                  <li classNames="nav-item dropdown list-unstyled">
                      <a className="nav-link dropdown-toggle text-light " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Bengaluru
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Hyderabad</a></li>
                        <li><a className="dropdown-item" href="#">Chennai</a></li>
                        <li><a className="dropdown-item" href="#">Pune</a></li>
                        <li><a className="dropdown-item" href="#">Kolkata</a></li>
                        <li><a className="dropdown-item" href="#">Delhi</a></li>
                        <li><a className="dropdown-item" href="#">Maharastra</a></li>
                      </ul>
                    </li>
                 </ul>
                 <button type="button" className="btn btn-danger mx-4">SIGN </button>
         </div>
      </nav>




     );
}
 
export default Navbar;