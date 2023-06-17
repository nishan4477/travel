import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import vector from '../../datas/vectorimg';

function VectorSlider() {
  return (
   <>
   <OwlCarousel className='owl-theme' loop margin={5} nav items={4}>
    {vector.map((b)=>(
        <div class='item'>
       <img  className='w-100' height="200px"  src={b.image}/>
       
    </div>


    ))}
  
    </OwlCarousel>
     

   
   
   </>
  )
}

export default VectorSlider