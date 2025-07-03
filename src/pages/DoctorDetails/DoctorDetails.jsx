import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const doctorDetails = () => {

    const {id}=useParams();
    const doctorId = parseInt(id);
    const data =useLoaderData();
   const singleDoctor=data.find(doctor=>doctor.id===doctorId);//////
    const {image,name,education,speciality,experience,registration_number,working_hospital,fees,availability}=singleDoctor;

    return (
        <div>
            

            <div className="hero-content text-center border shadow-sm rounded-sm mt-5">
                <div className="">
                <h1 className="text-3xl font-bold">Doctor’s Profile Details</h1>
                <p className="py-6">
                    Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.
                </p>
                
                </div>
            </div>
          

            <div className="card card-side bg-base-100 shadow-sm border mt-10 mb-10">
                <figure>
                    <img className='w-full h-[300px]'
                    src={image}
                    alt="Movie" />
                </figure>
                <div className="card-body">
                    
    
       
      
      
    
                <h3 className='text-xl font-semibold'>{name}</h3>
     
                <h3 >Education : {education}</h3>
                <h3>Specialist : {speciality}</h3>
                <h3>Working   : {working_hospital}</h3>
     
     <div className='border-t-1 border-dashed'></div>
     <h2>Registration Number : {registration_number}</h2>
     <div className='border-t-1 border-dashed'></div>
      <h3 >Availability :<div className="badge badge-soft badge-success "> {availability}</div></h3>
     <div className="badge badge-soft badge-success">Experience : {experience}</div>
     <h3>Consultation Fee: {fees} Per Consultation</h3>
                </div>
            </div>

        </div>
    );
};

export default doctorDetails;