import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { partId } = useParams(null)

    const [part, setPart] = useState({})
    const { img, name, price, quantity, description, order } = part;
    useEffect(() => {
        fetch(`http://localhost:5000/parts/${partId}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [partId])

    return (
        <div className='flex justify-center'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img style={{width:'500px' , height:'400px'}}  src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : {price}</p>
                    <p>Available Quantity : {quantity}</p>
                    <p>{description}</p>
                    <p>Minimum Order : {order}</p>
                    <div className="card-actions">
                        <label 
                        htmlFor="purchase-modal"
                         
                        className="btn modal-button">Purchase</label>
                    </div>
                    {part && <PurchaseModal
                        key={part._id}
                        part={part}
                        setPart={setPart}
                    ></PurchaseModal>}
                </div>
            </div>
        </div>
    );
};

export default Purchase;