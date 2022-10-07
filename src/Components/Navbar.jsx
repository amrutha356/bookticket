import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg nav-1 navbar-dark bg-dark py-4 px-0">

      <div className="logo container ">
        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" className="px-4" />


        <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent" />
        <form className="d-flex form" role="search">
          <input className="form-control nav-form me-2" type="search" placeholder="search for movies, events, series" aria-label="Search" />

        </form>
      </div>

      <div className="links d-flex ">
        <ul>
          <li>
            <Link className="a">
              Home
            </Link>
          </li>

          <li>
            <Link className="a">
              About
            </Link>
          </li>

        </ul>

        <button type="button" className="btn btn-danger mx-4 ">SIGN IN</button>
      </div>
    </nav>




  );
}

export default Navbar;