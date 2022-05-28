import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const PurchaseModal = ({ part }) => {
    // console.log(part)
    const { quantity, name, price, _id, order } = part;
    const navigate = useNavigate();
    const [orderChack , setOrderChack] =useState(false);
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit ,reset } = useForm();
    if (loading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data)
        if (data.orders > data.quantity) {
            const order = setOrderChack(true);
            return Swal.fire(
                {
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have to order more than minimun quantity!',
                }
             
            )
        }
      
        else if (data.orders < data.order) {
            const order = setOrderChack(true);
            return Swal.fire(
                {
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You  order more than available quantity!',
                }
            )
            
        }
        else {
            const url = "https://desolate-forest-96916.herokuapp.com/purchase";
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
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your order has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    navigate(`/`)
                })

        };
    }

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
                        <input
                            type="text"
                            defaultValue={user.displayName}  {...register("client")}
                            className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            defaultValue={user.email}
                            {...register("email")}
                            className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            {...register("product")}
                            className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Minimum Order</span>
                        </label>
                        <input
                            type="number"
                            defaultValue={order}
                            {...register("order")}
                            className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Avilable Quantity</span>
                        </label>
                        <input
                            type="number"
                            defaultValue={quantity}
                            {...register("quantity")}
                            className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            defaultValue={price}
                            {...register("price")}
                            className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Orders</span>
                        </label>
                        <input
                            type="number"
                            {...register("orders")}
                            className="input input-bordered w-full " />
                        <input
                            type="text"
                            placeholder='Phone Number'
                            {...register("number")}
                            className="input input-bordered w-full " />
                        <textarea
                            className="textarea textarea-bordered" placeholder="Enter Your Location"
                            {...register("address")} >
                        </textarea>
                        <button
                        disabled={orderChack ? true : false}
                            className="btn btn-ghost  btn-outline">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;