import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BlogData from '../../datas/BlogData';

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
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>

    <Carousel responsive={responsive}>
        {BlogData.map((d)=>(

<div className="card shadow " style={{width: '27rem'}}>
<img height="200px"  src={d.image} className="card-img-top " alt="..." />
<div className="card-body">
  <h3 className="card-title text-danger ">{d.title}</h3>
  <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quos laboriosam ex ea obcaecati.</p>
  <a href="#" className="btn btn-danger">ReadMore</a>
</div>
</div>

        ))}




</Carousel>
    


    
    
    
    
    
    
    
    </>
  )
}

export default TravelNews