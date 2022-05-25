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
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price : {price}</p>
                <p>Minimum Order : {order}</p>
                <p>Available Quantity : {quantity}</p>
                <p>Description : {description.slice(0, 60)}</p>
                <div className="card-actions">
                    <button onClick={()=>handleNavigate(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;