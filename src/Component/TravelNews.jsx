import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BlogData from '../../datas/BlogData';
import { Link } from 'react-router-dom';

const TravelNews = ( ) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2.5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.2
        }
      };
  return (
    <>

    <Carousel responsive={responsive}>
        {BlogData.map((d)=>(

<div className="card mx-1 g-3 shadow " style={{width: ''}}>
<img height="200px"  src={d.image} className="card-img-top " alt="..." />
<div className="card-body">
  <h3 className="card-title text-danger py-1 ">{d.title}</h3>
  <p  className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quos laboriosam ex ea obcaecati.</p>
  <Link  to="#" className="btn my-3 btn-danger">ReadMore</Link>
</div>
</div>

        ))}




</Carousel>
    


    
    
    
    
    
    
    
    </>
  )
}

export default TravelNews