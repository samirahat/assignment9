import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/error .png'

const Error = () => {
    
    return (
        <div className='bg-teal-200 min-h-screen flex  items-center'>
            <img className='max-w-7xl h-screen' src={errorImg} alt="" />

            <div>
                <h1 className='text-8xl font-extrabold '>404 Error</h1>
                <h2 className='text-5xl font-bold mb-20'>Page is not found!!!!</h2>
                <button  className='border bg-orange-500 text-white px-8 py-3 font-bold rounded-xl'><Link to={`/home`}>Go Back To Home</Link> </button>
            </div>
            
        </div>
    );
};

export default Error;