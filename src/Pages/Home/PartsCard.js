import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PartsCard = ({ part }) => {
    // console.log(part)
    const navigate = useNavigate();
    const handleNavigate = id => {
        navigate(`/purchase/${_id}`)
    }
    const { _id, img, price, order, quantity, description, name } = part;
    return (
        <div class="flex flex-col items-center justify-center max-w-sm mx-auto mt-10">
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md lg:w-80 " style={{ backgroundImage: `url(${img})` }}></div>

            <div class="w-56 -mt-10 overflow-hidden bg-blue-400 rounded-lg shadow-lg md:w-64 lg:w-64">
                <h3 class="py-2 font-bold tracking-wide text-center text-white uppercase">{name}</h3>
                <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span class="font-bold text-gray-800 dark:text-gray-200">${price}</span>
                    <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform font-bold bg-blue-400 rounded hover:bg-blue-700 focus:bg-gray-700  focus:outline-none" onClick={handleNavigate} >Details</button>
                </div>
            </div>
        </div>

    );
};

export default PartsCard;