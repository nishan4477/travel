import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../assets/Images/1.jpg"
import { Link } from 'react-router-dom';



const Members = () => {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 992 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 992, min: 768 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 768, min: 576 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1,
        },
      }
    
  return (
    <>
    <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
    
    <div className="membox   mx-5">
        <div className="imgcir ">
            <img src={img} className='w-100'></img>
        </div>
        <h3 className='text-success fw-1' >Founder</h3>
        <p className='fw-3'>Nishan Sakha</p>
        <Link to="mailto:nishansakha@gmail.com">  <small> <i className="fa-solid fa-envelope" /> nishansakha@gmail.com</small></Link> 

    </div>
    <div className="membox  mx-5">
        <div className="imgcir">
            <img src={img} className='w-100'></img>
        </div>
        <h3 className='text-success fw-1' > Co-Founder</h3>
        <p className='fw-3'>Nishan Sakha</p>
        <Link to="mailto:nishansakha@gmail.com"> <small> <i className="fa-solid fa-envelope" /> nishansakha@gmail.com</small></Link> 

    </div>
    <div className="membox mx-5">
        <div className="imgcir">
            <img src={img} className='w-100'></img>
        </div>
        <h3 className='text-success fw-1' >Manager</h3>
        <p className='fw-3'>Nishan Sakha</p>
        <Link to="mailto:nishansakha@gmail.com"> <small> <i className="fa-solid fa-envelope" /> nishansakha@gmail.com</small></Link> 

    </div>
    <div className="membox mx-5">
        <div className="imgcir">
            <img src={img} className='w-100'></img>
        </div>
        <h3 className='text-success fw-1' >Guide</h3>
        <p className='fw-3'>Nishan Sakha</p>
      <Link to="mailto:nishansakha@gmail.com"> <small> <i className="fa-solid fa-envelope" /> nishansakha@gmail.com</small></Link> 

    </div>

  
    
    
    
    
    </Carousel>
    </>
  )
}

export default Members