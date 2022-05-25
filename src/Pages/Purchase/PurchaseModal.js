import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const PurchaseModal = ({ part, setPart }) => {
    // console.log(part)
    const { quantity, name, price, _id } = part;
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, } = useForm();
    if(loading){
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data)
        const url = "http://localhost:5000/purchase";
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('product added')
            })

    };
    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal">
               
                <div className="modal-box relative">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2'>
                        <label className="label">
                            <span className="label-text">Client Name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName}  {...register("client")} className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="email" defaultValue={user.email}  {...register("email")} className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" defaultValue={name}  {...register("product")} className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={price} placeholder='Price' {...register("price")} className="input input-bordered w-full " />
                    
                        <label className="label">
                            <span className="label-text">Order Quantity</span>
                        </label>
                        <input type="number"  {...register("order")} className="input input-bordered w-full " />
                        <input type="text" placeholder='Phone Number' {...register("number")} className="input input-bordered w-full " />
                        <textarea class="textarea textarea-bordered" placeholder="Enter Your Location" {...register("address")} ></textarea>
                        <button className="btn btn-ghost  btn-outline">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;