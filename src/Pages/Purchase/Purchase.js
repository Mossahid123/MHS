import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { partId } = useParams(null)

    const [part, setPart] = useState({})
    const { img, name, price, quantity, description, order } = part;
    useEffect(() => {
        fetch(`https://desolate-forest-96916.herokuapp.com/parts/${partId}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [partId])

    return (
        <div className='flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Price : {price}</p>
                    <p>Available Quantity : {quantity}</p>
                    <p>{description}</p>
                    <p>Minimum Order : {order}</p>
                    <div className="card-actions">
                        <label
                            htmlFor="purchase-modal"

                            className="btn modal-button">Purchase</label>
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