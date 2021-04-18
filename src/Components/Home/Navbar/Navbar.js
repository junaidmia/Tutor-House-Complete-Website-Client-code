import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import logo from './computer.png'
import { UserContext } from '../../../App';
// import logo2 from'./Tutor House.png'


const Navbar = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  return (
    <div className="text-center">


      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid ">
          <Link to="/" style={{ textDecoration: 'none' }}>

            <a class="navbar-brand ms-2 bold" href=".."><img style={{ width: '50px' }} src={logo} alt="" /> Tutor House </a>
          </Link>


          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">

            <ul class="navbar-nav ms-auto">

              <li class="nav-item">
                <form class="d-flex">
                  <input class="form-control me-2 mt-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn" type="submit"> <FontAwesomeIcon icon={faSearch} /> </button>
                </form>
              </li>

              <li class="nav-item">
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <a class="nav-link p-3" href="..."> Home</a>
                </Link>

              </li>

              <li class="nav-item">
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <a class="nav-link p-3" href="...">Contact</a>
                </Link>

              </li>

              <li class="nav-item">
                <Link to="/aboutUs" style={{ textDecoration: 'none' }}>
                  <a class="nav-link p-3" href="...">About us</a>
                </Link>

              </li>


              <li class="nav-item ">
                <Link to="/bookTutor" style={{ textDecoration: 'none' }}>
                  <a class="nav-link  p-3" href="...">Dashboard</a>
                </Link>
              </li>

              <li class="nav-item ">
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <a class="nav-link p-2  " href="...">{loggedInUser.email ? <img style={{ width: '35px' }} className="rounded-circle" src={loggedInUser.photoURL} alt="" /> : ''}</a>
                </Link>

              </li>


              <li class="nav-item">
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <a class="nav-link p-3" href="...">{loggedInUser.email ? loggedInUser.name : 'login'}</a>
                </Link>

              </li>



            </ul>

          </div>
        </div>
      </nav>

    </div>

  );
};

export default Navbar;