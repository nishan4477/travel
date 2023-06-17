import React from 'react'
import footerimg from "../assets/Images/footerimg.jpg"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="container p-2 text-light">
            <div className="row">
                <div className="col-lg-4">
                   <div className="box"><h3>Contact Us</h3></div> <br/>
                   <ul>
                    <li><Link to="">Kathmandu, Nepal </Link></li>
                    <li><Link to="">Contact Us: 9843812806</Link></li>
                    <li><Link to=""><i class="fa-regular fa-envelope"></i> nishansakha@gmail.com</Link></li>
                    <li><Link to="">Office time:10:00AM-6:00AM</Link></li>
                   </ul>


                </div>
                <div className="col-lg-4">
                <div className="box"><h3>Popular Packages</h3></div> <br/>
                   <ul>
                    <li><Link to="">Nepal Honeymoon Tour</Link></li>
                    <li><Link to="">Everest Base Camp Trek</Link></li>
                    <li><Link to="">Kathmandu And Pokhara Tour</Link></li>
                    <li><Link to="">Manaslu Circuit Trek</Link></li>
                   </ul>


                </div>
                <div className="col-lg-4">
                <div className="box"><h3>NEWSLETTER</h3></div> <br/>
                 <p>Get Our Latest News And Special offers</p>
                 <input type='mail' placeholder='your email address'/><br/><br></br>
                 <button className='btn btn-sm btn-danger'>Suscribe</button>

                </div>
            </div>
            <div className="row py-5 text-center">
                <hr/>
                <p>Powered By Nishan Sakha © 2023</p>
                

            </div>
        </div>
    
    </footer>
  )
}

export default Footer