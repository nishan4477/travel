import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import vector from '../../datas/vectorimg';

function VectorSlider() {
  let itemContent = 4;
  if($(window).width() <=769){
    itemContent = 3;
  }
  return (
   <>
   <OwlCarousel className='owl-theme' loop margin={5} nav items={`${itemContent}`}>
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