import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import logo from "../assets/Images/logo.png"

import Home from '../Pages/Home'



function Navbar() {
  return (
    <>
    <nav  >
        <div   className="tint  ">
    <div  className="container py-3 " >
     <header >
    <div className="row " >
                <div className="col-lg-4 ">
                    <ul className='d-flex justify-content-start align-items-center gap-3 '>
                        <li><Link to="mailto:nishansakha@gmail.com"><i class="fa-solid fa-envelope"></i> nishansakha@gmail.com </Link> </li>
                        <li><Link to="tel:9843812806"><i class="fa-solid fa-phone"></i> Call Us  </Link></li>
                        
                    </ul>

                </div>
                <div className="col-lg-8">
                    <ul className='d-flex justify-content-end align-items-center gap-3 '>
                    <li><Link to=""><i class="fa-brands fa-square-facebook"></i> </Link></li>
                    <li><Link to=""><i class="fa-brands fa-instagram"></i> </Link></li>
                    <li><Link to=""><i class="fa-brands fa-square-pinterest"></i> </Link></li>
                    <li><Link to="">Login </Link></li>
                    <li><Link to="">Sign up </Link></li>
                    </ul>
                    </div>
            </div>
            </header>
          <div className='navigator'>
            <div className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container">
    <Link className="navbar-brand " to="#"><img className=' logo' src={logo} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse ms-5 " id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item  ">
          <Link className="nav-link active " aria-current="page" to="#">Home</Link>
        </li>
       
        <li className="nav-item dropdown ">
          <Link className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LISTING
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown ">
          <Link className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TOURS
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">NATIONAL</Link></li>
            <li><Link className="dropdown-item" to="#">INTERNATIONAL</Link></li>
            <li><Link className="dropdown-item" to="#">OTHERS</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown ">
          <Link className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           DESTINATIONS
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">POKHARA</Link>
            
            </li>
            <li><Link className="dropdown-item" to="#">KATHMANDU</Link></li>
            <li><Link className="dropdown-item" to="#">MUSTANG</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown ">
          <Link className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PAGES
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item  ">
          <Link className="nav-link active " aria-current="page" href="#">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>
         
      
<div   className=' text-center text-light moto'>
    <h1 >Let's make travel fun<br></br> and<br/> Create beautiful memories.</h1>
    <p>We are the best travel company in the town who asure you the best travel experience in a very afordable price.</p>
    <button className='btn btn-danger btn-sm '>Readmore</button>
    
    


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