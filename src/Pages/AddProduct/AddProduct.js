import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddProduct = () => {
    const { register, handleSubmit, } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = "http://localhost:5000/parts";
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
            <div className="card w-100 mx-auto maax-h-max bg-base-100 shadow-xl flex justify-center items-center">
                 <h1>Add product</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2'>
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" placeholder='product name' {...register("name", { required: true, maxLength: 20 })} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder='product name' {...register("price")} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" {...register("description")} placeholder="Description"></textarea>
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" placeholder='Quantity' {...register("quantity")} className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Minimum Order</span>
                        </label>
                        <input type="number"  {...register("order")} className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder='Photo Url' {...register("img")} className="input input-bordered w-full max-w-xs" />
                        <button className="btn btn-ghost  btn-outline">Add Product</button>
                    </form>

                </div>
            </div>
    );
};

export default AddProduct;