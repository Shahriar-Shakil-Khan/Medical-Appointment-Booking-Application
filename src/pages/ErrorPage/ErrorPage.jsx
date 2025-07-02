import React from 'react';
import error_image from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-between '>
                <p className='text-2xl ml-2'>Doctor not found</p>
                <button className='btn bg-sky-500/50 mr-2'>Back</button>
            </div>
            <div ><img className="h-[695px] w-full" src={error_image} alt="" /></div>
        </div>
    );
};

export default ErrorPage;