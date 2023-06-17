import React from "react";

function Hero() {
  return (
    <>
      <div data-aos="fade-right" className="tint d-flex align-items-center ">
        <div className="container py-3 positon-relative z-1">
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className=" text-center text-light moto"
          >
            <h1>
              Let's make travel fun<br></br> and
              <br /> Create beautiful memories.
            </h1>
            <p>
              We are the best travel company in the town who asure you the best
              travel experience in a very afordable price.
            </p>
            <button className="btn btn-danger btn-sm ">Readmore</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
