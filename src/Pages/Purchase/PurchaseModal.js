import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const PurchaseModal = ({ part, setPart }) => {
    const { quantity, name, price, _id } = part;
    const [user, loading] = useAuthState(auth);

    if(loading){
        return <Loading></Loading>
    }

    const handleBooking = event => {
        event.preventDefault();
        const phone = event.target.number.value;
        const address = event.target.address.value;
        console.log(quantity, name, price, phone, address)

        const booking = {
            partsId: _id,
            parts: name,
            price,
            buyer: user.email,
            buyerName: user.displayName,
            phone: phone,
            address: address,
            quantity: quantity
        }
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
               setPart(data)
            })


    }

    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product</span>
                            </label>
                            <input type="text" defaultValue={name} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={price} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Avaiable Quantity</span>
                            </label>
                            <input type="text" defaultValue={quantity} className="input input-bordered w-full max-w-xs" readOnly />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name='number' placeholder="Enter your Phone Number" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name='address' placeholder="Enter Your Address"></textarea>
                        </div>
                        <input type="submit" defaultValue="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;