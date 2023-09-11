import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { partId } = useParams(null)

    const [part, setPart] = useState({})
    const { img, name, price, quantity, description, order } = part;
    useEffect(() => {
        fetch(`https://mns-server-site.onrender.com/parts/${partId}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [partId])

    return (
        <div className='flex justify-center items-center'>
            <div class="flex w-10/12 h-80 mx-auto overflow-hidden bg-white rounded-lg shadow-lg mt-16">
                <div class="w-2/3 bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
                <div class="w-2/3 p-4 md:p-4">
                    <h1 class="text-2xl font-bold text-blue-400 ">{name}</h1>
                    <p class="text-sm font-bold text-blue-400 ">Minimum Orders : {order}</p>
                    <p class="text-sm font-bold text-blue-400 ">Avaiable Quantity : {quantity}</p>

                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>

                    <div class="flex mt-2 item-center">
                        <svg class="w-5 h-5 text-blue-500 fill-current " viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>

                        <svg class="w-5 h-5 text-blue-500 fill-current " viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>

                        <svg class="w-5 h-5 text-blue-500 fill-current " viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>

                        <svg class="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>

                        <svg class="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                    </div>

                    <div class="flex justify-between mt-3 item-center">
                        <h1 class="text-lg font-bold text-gray-700 ">${price}</h1> 
                 
                        <label 
                          htmlFor="purchase-modal"
                        class=" btn modal-button px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-blue-400 rounded outline-none hover:bg-blue-500  focus:outline-none focus:bg-blue-600 ">Purchase</label>
                    </div>
                </div>
            </div>
            {part && <PurchaseModal
                key={part._id}
                part={part}
                partId={partId}
                setPart={setPart}
            ></PurchaseModal>}
        </div>
    );
};

export default Purchase;