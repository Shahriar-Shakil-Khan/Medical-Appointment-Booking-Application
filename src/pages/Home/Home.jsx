import React from 'react';
import doctor_image from '../../assets/banner-img-1.png'

const Home = () => {
    return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mx-auto mt-15">Dependable Care, Backed by Trusted <br /> <span>Professionals.</span></h1>
      <p className="text-center p-6">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
      <div className="flex justify-center items-center gap-3 mb-5">
        
                <fieldset className="fieldset">
                    <input type="text" className="input w-[500px]" placeholder="search any doctor" />
                </fieldset>
                <button className="btn bg-sky-500/50">Search</button>
      </div>

      <div className="flex justify-center items-center gap-6 mb-5">
       <div><img src={doctor_image} alt="" /></div> 
        <div><img src={doctor_image} alt="" /></div> 
      </div> 
    </div> 
    );
};

export default Home;

