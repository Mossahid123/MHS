import React from 'react';
import Login from '../Login/Login';
import Register from '../Login/Register';

const NewFeatures = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Big Offer!</h1>
                        
                        <a href="https://logwork.com/countdown-71qb" class="countdown-timer" data-timezone="Asia/Dhaka" data-date="2022-05-31 00:29">50% Offer will be finished at</a>

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