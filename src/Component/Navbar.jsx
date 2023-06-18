import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import logo from "../assets/Images/logo.png"

import Home from '../Pages/Home'





function Navbar() {
  return (
    <>
   <nav classname="position-fixed w-100 z-3">
  <header classname="bg-light">
    <div classname="container">
      <div classname="row my-0 py-3  ">
        <div classname="col-lg-4 ">
          <ul classname="d-flex justify-content-start align-items-center gap-3 ">
            <li>
              <link to="mailto:nishansakha@gmail.com" />
              <i className="fa-solid fa-envelope" /> nishansakha@gmail.com{'{'}" "{'}'}
              {'{'}" "{'}'}
            </li>
            <li>
              <link to="tel:9843812806" />
              <i className="fa-solid fa-phone" /> Call Us{'{'}" "{'}'}
            </li>
          </ul>
        </div>
        <div classname="col-lg-8">
          <ul classname="d-flex justify-content-end align-items-center gap-3 ">
            <li>
              <link to />
              <i className="fa-brands fa-square-facebook" />{'{'}" "{'}'}
            </li>
            <li>
              <link to />
              <i className="fa-brands fa-instagram" />{'{'}" "{'}'}
            </li>
            <li>
              <link to />
              <i className="fa-brands fa-square-pinterest" />{'{'}" "{'}'}
            </li>
            <li>
              <link to />Login 
            </li>
            <li>
              <link to />Sign up 
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div classname="navigator">
    <div classname="navbar navbar-expand-lg bg-body-tertiary ">
      <div classname="container">
        <link classname="navbar-brand " to="#" /><img classname=" logo" src="{logo}" />
        <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span classname="navbar-toggler-icon">
          </span></button>
        <div classname="collapse navbar-collapse ms-5 " id="navbarNavDropdown">
          <ul classname="navbar-nav">
            <li classname="nav-item  ">
              <link classname="nav-link active " aria-current="page" to="#" />Home
            </li>
            <li classname="nav-item dropdown ">
              <link classname="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" />
              LISTING
              <ul classname="dropdown-menu">
                <li><link classname="dropdown-item" to="#" />Action</li>
                <li><link classname="dropdown-item" to="#" />Another action</li>
                <li><link classname="dropdown-item" to="#" />Something else here</li>
              </ul>
            </li>
            <li classname="nav-item dropdown ">
              <link classname="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" />
              TOURS
              <ul classname="dropdown-menu">
                <li><link classname="dropdown-item" to="#" />NATIONAL</li>
                <li><link classname="dropdown-item" to="#" />INTERNATIONAL</li>
                <li><link classname="dropdown-item" to="#" />OTHERS</li>
              </ul>
            </li>
            <li classname="nav-item dropdown ">
              <link classname="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" />
              DESTINATIONS
              <ul classname="dropdown-menu">
                <li><link classname="dropdown-item" to="#" />POKHARA
                </li>
                <li><link classname="dropdown-item" to="#" />KATHMANDU</li>
                <li><link classname="dropdown-item" to="#" />MUSTANG</li>
              </ul>
            </li>
            <li classname="nav-item dropdown ">
              <link classname="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" />
              PAGES
              <ul classname="dropdown-menu">
                <li><link classname="dropdown-item" to="#" />Action</li>
                <li><link classname="dropdown-item" to="#" />Another action</li>
                <li><link classname="dropdown-item" to="#" />Something else here</li>
              </ul>
            </li>
            <li classname="nav-item  ">
              <link classname="nav-link active " aria-current="page" href="#" />CONTACT
            </li>
          </ul>
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