import React from 'react';
import error_image from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <div>
            <div ><p className='text-2xl '>Page Not Found</p></div>
            <div ><img className="h-[695px] w-full" src={error_image} alt="" /></div>
        </div>
    );
};

export default ErrorPage;