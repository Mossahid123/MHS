import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'


const AddProduct = () => {

    const { register, handleSubmit, } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = "https://mns-server-site.onrender.com/parts";
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
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })

    };
    return (
        <div className="mt-12">
            <h1 className="text-5xl text-center">Add Your Product</h1>
            <div className="card-body w-96 bg-base-100 mx-auto shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2'>
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" placeholder='product name' {...register("name", { required: true, maxLength: 20 })} className="input input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder='product name' {...register("price")} className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" {...register("description")} placeholder="Description"></textarea>
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" {...register("quantity")} className="input input-bordered w-full " />
                        <label className="label">
                            <span className="label-text">Minimum Order</span>
                        </label>
                        <input type="number"  {...register("order")} className="input input-bordered w-full" />
                        <input type="text" placeholder='Photo Url' {...register("img")} className="input input-bordered w-full" />
                        <button className="btn btn-ghost  btn-outline">Add Product</button>
                     </form>
            </div>
        </div>
    );
};

export default AddProduct;