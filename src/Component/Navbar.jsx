import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import logo from "../assets/Images/logo.png"

import Home from '../Pages/Home'





function Navbar() {
  if ($(window).width() >= 480) {
    $(window).scroll(function () {
      console.log("asd");
      if ($(this).scrollTop() > 150) {
        $("header").css({ display: "none" });
      } else {
        $("header").css({ display: "block" });
      }
    });
  }
  return (
    <>
   <nav className="position-fixed w-100 z-3">
  <header className="bg-light">
    <div className="container">
      <div className="row my-0 py-3  ">
        <div className="col-lg-5 ">
          <ul className="d-flex justify-content-start align-items-center gap-3 ">
            <li>
              <Link to="mailto:nishansakha@gmail.com" >
              <i className="fa-solid fa-envelope" /> nishansakha@gmail.com</Link>
             
            </li>
                <li>
                  <Link to="tel:9843812806" >
                  <i className="fa-solid fa-phone" /> Call Us</Link>
                </li>
          </ul>
        </div>
        <div className="col-lg-7">
          <ul className="d-flex justify-content-end align-items-center gap-3 ">
            <li>
              <Link to="" >
              <i className="fa-brands fa-square-facebook" /></Link>
            </li>
            <li>
              <Link to ="">
              <i className="fa-brands fa-instagram" /></Link>
            </li>
            <li>
              <Link to ="">
              <i className="fa-brands fa-square-pinterest" /></Link>
            </li>
            <li>
              <Link to ="">Login </Link>
            </li>
            <li>
              <Link to="" >Sign up </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  
<div className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="#"><img className='w-100 logo'  height='150px' src={logo}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Pricing</Link>
        </li>
      <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Tours
  </Link>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="#">Pokhara</Link></li>
    <li><Link className="dropdown-item" to="#">Mustang</Link></li>
    <li><Link className="dropdown-item" to="#">Manag</Link></li>
    <li><Link className="dropdown-item" to="#">Kalinchiowk</Link></li>
    <li><Link className="dropdown-item" to="#">ABC circuit</Link></li>
    <li><Link className="dropdown-item" to="#">Bandipur</Link></li>
  </ul>
</li>

       
      </ul>
      <div className='d-flex justify-content-end align-items-center  mt-2' >
     <form className="d-flex gap-2  justify-content-end align-items-center" role="search">
  <input className="form-control me" type="search" placeholder="Enter Your Destination" aria-label="Search" />
  <button className="btn btn-danger btn-outline-dark" type="submit">Search</button>
</form>
</div>
    </div>
  </div>
</div>

</nav>

      



    

    
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    </>
  )
}

export default Navbar