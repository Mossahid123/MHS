import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { partId } = useParams()
    const [user, loading, error] = useAuthState(auth);
    const [part, setPart] = useState({})
    const { img, name, price, quantity, description, order } = part
    useEffect(() => {
        fetch(`http://localhost:5000/parts/${partId}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [partId])
    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <figure class="px-10 pt-10">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{price}</p>
                    <p>{quantity}</p>
                    <p>{description}</p>
                    <p>{order}</p>
                    <div class="card-actions">
                        <label htmlFor="booking-modal" class="btn modal-button">open modal</label>
                        <input type="checkbox" id="booking-modal" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative">
                                <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                    <input type="text" name="price" placeholder="price" disabled value={price} className="input input-bordered w-full max-w-xs" />
                                    <input type="text" name="quantity"  className="input input-bordered w-full max-w-xs" />
                                    <textarea name="" id="" cols="40" rows="5"></textarea>
                                    <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;