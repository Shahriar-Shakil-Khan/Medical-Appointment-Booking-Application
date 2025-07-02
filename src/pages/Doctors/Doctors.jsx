import React, { Suspense } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({data}) => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center mx-auto mt-15'>Our Best Doctors</h1>
            <p className='text-center mx-auto mt-2 mb-15'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <Suspense fallback={<span>loading.......</span>}>
                {/* <Doctor data={data}></Doctor> */}
                <div className='grid grid-cols-3 mt-5 mb-5'>
                    {
                    data.map((singleDoctor)=><Doctor key={singleDoctor.id} singleDoctor={singleDoctor}></Doctor>)
                }
                </div>
            </Suspense>
        </div>
    );
};

export default Doctors;