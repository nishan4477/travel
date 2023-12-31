import React from "react";
import Catdata from "../../datas/Catogoriesdata";
import VectorSlider from "../Component/VectorSlider";
import Hero from "../Component/Hero";
import TravelNews from "../Component/TravelNews";
import Members from "../Component/Members";

function Home() {
  return (
    <>
      <Hero />
      <div className="container text-center ">
        <div className="row">
          <div className="col-lg-8">
            <div className="py-5" data-aos="fade-right">
              <div className="line">
                <h2>About Us</h2>
              </div>
              <p>
                We manage and you travel easy – that’s the motto of our company.
                Connect with us and we will do the rest. The responsibility is
                huge and we are here to make sure even the miniscule is served
                without any reluctance.
              </p>
            </div>
            </div>
            <div className="col-lg-4 ">
              <div className="py-5" data-aos="fade-up">
              <img className="w-100" src="https://www.wallpaperflare.com/static/914/780/13/nature-balloon-cappadocia-turkey-wallpaper.jpg"></img>
            </div>
            </div>
          
        </div>
        {/* tab paneel started */}
        <div data-aos="fade-right" className="container">
          <div className=" pan page-header">
            <div className="line py-2">
              <h2>
                Why Book On Travels
                <span className="pull-right label label-default"></span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 ms-auto me-auto">
              <div className=" pan  border-danger rounded  panel with-nav-tabs panel-default">
                <div className="panel-heading">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#tab1default" data-toggle="tab">
                        THE COMPLETE EXPERIENCE
                      </a>
                    </li>
                    <li>
                      <a href="#tab2default" data-toggle="tab">
                        EDUCATION & EXPERTISE
                      </a>
                    </li>
                    <li>
                      <a href="#tab3default" data-toggle="tab">
                        RESPONSIBILE TRAVEL
                      </a>
                    </li>
                    <li>
                      <a href="#tab4default" data-toggle="tab">
                        VALUE
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="panel-body">
                  <div className="tab-content fs-3">
                    <div className="tab-pane fade in active" id="tab1default">
                      <p>
                        We understand that your trip is not a sum of
                        transactions, however it is a complex collection of
                        experiences that begin with your first inquiry. We learn
                        about your interests and preferences so that we can
                        craft an itinerary that you will love. Whether you’d
                        like experiences centered around your passions such as
                        cuisine, architecture, adventure, or a specific
                        destination, we will ensure your trip is inspired by
                        you. Moreover we will guide you through the entire
                        process, from pre-travel advice on packing,
                        vaccinations, and assistance with travel documents to a
                        comfortable and stress-free return home, we work with
                        you to design a seamless journey catered to your unique
                        interests.
                      </p>
                    </div>
                    <div className="tab-pane fade" id="tab2default">
                      <p>
                        Travel is our passion and daily focus and we are
                        continuously working to experience and encounter many of
                        the resorts, activities and destinations that you are
                        seeking. In addition to our vast first-hand travels, we
                        stay up to date on the latest travel news, itineraries,
                        trends, and policies through constant communication with
                        our network, ongoing training and industry events. Our
                        knowledge, relationships and expertise allow us to
                        design exclusive experiences that you will treasure for
                        a lifetime.
                      </p>
                    </div>
                    <div className="tab-pane fade" id="tab3default">
                      <p>
                        Sustainable travelling is at the core of everything we
                        do, which is why have policies in place to ensure
                        destinations retain their natural character and cultural
                        diversity. We develop our trips to help people become
                        more culturally and environmentally aware. The aim is to
                        give you big adventures while we maintain a small
                        footprint!
                      </p>
                    </div>
                    <div className="tab-pane fade" id="tab4default">
                      <p>
                        We all want value for money. By negotiating contracted
                        rates with the hotels, expert guides, activity providers
                        and airlines we work with, we can keep our prices as
                        competitive as possible. One thing we can offer that is
                        truly priceless though is time – while we do all the
                        heavy lifting, you can sit back safe in the knowledge
                        that we will plan your perfect trip down to the smallest
                        detail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tab paneel ended */}

        <div className="py-2 pb-4 px-2 bg">
          <div className="line py-2">
            <h2 >Best places to visit</h2>
          </div>
          <div className="row g-4">
            {Catdata.map((a) => (
              <div className="col-lg-4" key={a.id}>
                <div className=" card cardh larger shadow   text-center ">
                  <div className="imgbox">
                    <img className="imgns w-100" src={a.image} />
                  </div>
                  <p className="my-4">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" py-2">
          <VectorSlider/>

        </div>

        <div  className="py-4 bg">
          <div className="line py-2">
          
            <h2>Our Blog</h2>
          </div>
          <TravelNews />
        </div>
        <div className="py-3">
          <div className="line py-2">
          
            <h2>Our Teams</h2>
          </div>
          <Members />
        </div>

       
      </div>
    </>
  )
}

export default Home;
