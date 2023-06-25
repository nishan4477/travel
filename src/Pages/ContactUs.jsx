import React from 'react'
import Hero from '../Component/Hero'

const ContactUs = () => {
  return (
    
    <div className="contact">
        <div className="contactbanner d-flex justify-content-center align-items-center ">
        <div  data-aos="fade-up" data-aos-delay="1000" className='text-light z-1'>
                    <h2>CONTACT US</h2>
                </div>

        </div>
        
        <div className="container py-4 text-center">
            <h3 data-aos="fade-right" className='fw-1 text-danger'>Send a message to us!</h3>
            <form >
                <input className='px-5 py-2 my-4 ' type='text' name='name' placeholder='Enter your Fullname here ' required></input><br />
                <input className='px-5 py-2 my-4 ' type='text' name='location' placeholder='Enter your Location here ' required></input><br />
                <input className='px-5 py-2 my-4 ' type='email' name='mail' placeholder='Enter your email address ' required></input><br />
                <input className='px-5 py-2 my-4 ' type='text' name='subject' placeholder='Subject '></input><br />
                <textarea className='px-5 py-2 my-4 ' rows="5" cols="40" name='msg' placeholder='Enter your message' ></textarea><br />
                <button type='submit'  className='btn btn-danger px-5 '>Submit</button>
                
               
                


            </form>

            
     
        


        </div>

        
    </div>
  )
}

export default ContactUs