import React from 'react';
import { Link } from 'react-router';

const Doctor = ({singleDoctor}) => {
    const {image,name,education,speciality,experience,registration_number,id}=singleDoctor
    return (
        <div className="card bg-base-100 w-96 shadow-sm border m-4 mx-auto">
  <figure>
    <img className='w-full h-[300px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    <div className="badge badge-soft badge-error">Available</div>
    <div className="badge badge-soft badge-success">Experience : {experience}</div>
      
      
    </h2>
    <h3 className='text-xl font-semibold'>{name}</h3>
     <div className='flex justify-start gap-5'>
     <h3 >Education : {education}</h3>
     <h3>Specialist : {speciality}</h3>
     </div>
     <div className='border-t-1 border-dashed'></div>
     <h2>Registration Number : {registration_number}</h2>

    <Link to={`/doctorDetails/${id}`} ><button className='btn bg-sky-500/50'>Details</button></Link>
  </div>
</div>
    );
};

export default Doctor;

      