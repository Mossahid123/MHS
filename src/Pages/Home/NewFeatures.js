import React from 'react';
import Login from '../Login/Login';
import Register from '../Login/Register';

const NewFeatures = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-300">
                <div class="hero-content flex-col">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold text-center mb-4 font-bold text-red-500 drop-shadow-lg">Big Offer!</h1>
                    <h3 className='text-3xl text-cernter font-bold drop-shadow-lg'>50% Offer will be finished Soon</h3>
                    <h2 className='text-2xl text-center mt-3 font-bold  drop-shadow-lg'>Sing Up Now to Get Big Offer</h2>

                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className='card-body'>
                            <Register></Register>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewFeatures;